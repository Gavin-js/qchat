import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { MKButton } from 'react-native-material-kit'
import { style2pt } from '../../utils/index'

export default class TextRipple extends PureComponent {
  constructor() {
    super()
    this.state = {
      width: 'auto',
    }
  }
  render() {
    const { children, style, wrapperStyle, ...buttonProps } = this.props
    const { width } = this.state

    const buttonStyle = [
      {
        alignItems: 'flex-start',
        width,
      },
    ]

    return (
      <View style={wrapperStyle}>
        <MKButton
          maskColor="rgba(0,0,0,0.04)"
          rippleColor="rgba(0,0,0,0.02)"
          style={buttonStyle}
          {...buttonProps}
        >
          <Text
            // onLayout={({ nativeEvent }) => {
            //   this.setState({
            //     width: nativeEvent.layout.width,
            //   })
            // }}
            style={[
              style2pt({
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
              }),
              style,
            ]}
          >
            {children}
          </Text>
        </MKButton>
      </View>
    )
  }
}
