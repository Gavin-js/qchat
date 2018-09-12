import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import { style2pt } from '../../utils'

export default class EncryptText extends PureComponent {
  timeId = 0
  constructor(props) {
    super()
    this.state = {
      value: props.value,
      encrypt: false,
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state
    if (value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
        encrypt: false,
      })
      this.handleChangeText(nextProps.value)
    }
  }

  handleChangeText = (value) => {
    if (value) {
      this.timeId = setInterval(() => {
        this.setState({
          encrypt: true,
        })
      }, 100)
    }
  }

  render() {
    const { style } = this.props
    const { value, encrypt } = this.state
    const isEncrypt = value && encrypt

    return (
      <Text style={[style, isEncrypt ? style2pt({ paddingTop: 20 }) : null]}>
        {isEncrypt ? '*' : value}
      </Text>
    )
  }
}
