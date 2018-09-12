import React, { PureComponent } from 'react'
import { Picker } from 'antd-mobile-rn'
import { style2pt, Color } from '../../utils/index'
import styles from './styles'

export default class MyPicker extends PureComponent {
  render() {
    const { itemStyle, ...props } = this.props
    const defaultProps = {
      ...props,
      styles,
      itemStyle: [
        style2pt({
          color: Color.Title,
          fontSize: 32,
        }),
        itemStyle,
      ],
    }

    return <Picker {...defaultProps} />
  }
}
