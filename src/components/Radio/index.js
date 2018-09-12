import React, { PureComponent } from 'react'
import { Animated } from 'react-native'
import { MKRadioButton } from 'react-native-material-kit'
import { Color, style2pt } from '../../utils/index'

class MyRadio extends MKRadioButton {
  _aniChecked(checked) {
    Animated.parallel([
      Animated.timing(this._animatedRadius, {
        toValue: checked ? 5 : 0,
        duration: 220,
      }),
      Animated.timing(this._animatedSize, {
        toValue: checked ? 8 : 0,
        duration: 220,
      }),
    ]).start()
  }
}

class Radio extends PureComponent {
  render() {
    const { style, ...props } = this.props
    const defaultProps = {
      fillColor: Color.Primary,
      borderOnColor: Color.Primary,
      borderOffColor: Color.Primary,
      rippleColor: `rgba(${Color.RGBPrimary},.15)`,
      extraRippleRadius: 1.5,
      maskBorderRadiusInPercent: 20,
      style: [
        style2pt({
          borderWidth: 2,
          width: 32,
          height: 32,
        }),
        style,
      ],
      ...props,
    }
    return <MyRadio {...defaultProps} />
  }
}

Radio.Group = MKRadioButton.Group
export default Radio
