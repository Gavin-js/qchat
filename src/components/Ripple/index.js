import React, { PureComponent } from 'react'
import { MKRipple } from 'react-native-material-kit'
import { TouchableWithoutFeedback } from 'react-native'
import { Color } from '../../utils'

export default class Ripple extends PureComponent {
  render() {
    const { children, onClick, onPress, ...props } = this.props

    const defaultProps = {
      maskColor: Color.RippleMask,
      rippleColor: Color.Ripple,
      ...props,
    }

    return (
      <TouchableWithoutFeedback onPress={onPress || onClick}>
        <MKRipple {...defaultProps}>{children}</MKRipple>
      </TouchableWithoutFeedback>
    )
  }
}
