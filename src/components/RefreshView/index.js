import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'

import Toast from '../Toast'
import { style2pt } from '../../utils/index'

export default class RefreshView extends PureComponent {
  state = {
    refreshing: false,
  }

  onRefresh = () => {
    if (this.props.fetch) {
      this.setState({ refreshing: true })
      this.props.fetch({}, () => {
        Toast.info('刷新成功', 1)
        this.setState({ refreshing: false })
      })
    }
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            tintColor="#999"
            title="下拉刷新"
            titleColor="#999"
            colors={['#f38f71', '#ff4e35', '#3385ff']}
            progressBackgroundColor="#fff"
            {...this.props.refreshControl}
          />
        }
      >
        {this.props.children}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create(
  style2pt({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  })
)
