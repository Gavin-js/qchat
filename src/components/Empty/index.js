import React, { PureComponent } from 'react'
import ResultBase from '../Result/ResultBase'

export default class Empty extends PureComponent {
  render() {
    const { type = 'noData', ...other } = this.props
    if (type === 'noData') {
      return (
        <ResultBase
          {...{
            subtitle: '暂时没有记录',
            imageSource: require('../../assets/ill_no_data.png'),
            ...other,
          }}
        />
      )
    }

    if (type === 'network') {
      return (
        <ResultBase
          {...{
            title: '网络不给力',
            subtitle: '请查看网络设置或稍后重试',
            imageSource: require('../../assets/ill_network_fault.png'),
            ...other,
          }}
        />
      )
    }
  }
}
