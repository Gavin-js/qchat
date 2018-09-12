import React, { PureComponent } from 'react'
import { DeviceEventEmitter } from 'react-native'
import Toast from '../Toast'
import ListFooter from '../ListFooter'
import Empty from '../Empty'

export default class PaginationList extends PureComponent {
  state = {
    refreshing: false,
  }

  onEndReached = () => {
    const { page, pageCount } = this.props
    if (page > pageCount) {
      return
    }
    this.fetch({ page })
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.fetch({}, () => {
      Toast.info('刷新成功', 1)
      this.setState({ refreshing: false })
    })
  }

  init = ({ query, namespace }) => {
    this.componentDidMount = () => {
      this.fetch()

      DeviceEventEmitter.addListener(`refresh${namespace}`, () => {
        this.fetch()
      })
    }

    this.fetch = (options = {}, callback) => {
      const { dispatch, list = [] } = this.props
      const { page = 1 } = options

      if (page === 1) {
        Toast.loading()
      }
      query({
        page,
        ...options,
      })
        .then(({ data }) => {
          dispatch({
            type: `${namespace.toLocaleLowerCase()}/UPDATE`,
            payload: {
              ...data,
              list: page > 1 ? list.concat(data.list) : data.list,
              page: page + 1,
            },
          })
        })
        .finally(() => {
          Toast.hide()
          if (callback) callback()
        })
    }
  }

  flatList = (options = {}) => {
    const { list = [], page, pageCount } = this.props
    const { refreshing } = this.state
    const { ListEmptyComponent, listFooterMin = 3, ...other } = options

    return {
      data: list,
      refreshing,
      onRefresh: this.onRefresh,
      onEndReached: this.onEndReached,
      onEndReachedThreshold: 0.6,
      ListEmptyComponent: page === 1 ? null : ListEmptyComponent || <Empty />,
      ListFooterComponent: (
        <ListFooter
          disabled={list.length < listFooterMin}
          loading={pageCount > page}
        />
      ),
      ...other,
    }
  }
}
