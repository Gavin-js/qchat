import React, { PureComponent } from 'react'
import { StyleSheet, Text } from 'react-native'
import { MKButton } from 'react-native-material-kit'
import { style2pt, Color } from '../../utils/index'

export default class Button extends PureComponent {
  render() {
    const {
      children,
      type = 'default',
      style,
      textStyle,
      loading,
      size,
      ghost,
      border = true,
      ripple = true,
      ...buttonProps
    } = this.props
    const { disabled = false } = buttonProps

    const buttonStyle = [styles.button]

    const buttonTextStyle = [styles.buttonText, textStyle]

    if (type === 'primary') {
      buttonStyle.push({
        backgroundColor: Color.Primary,
        borderColor: Color.Primary,
      })
      buttonTextStyle.push({
        color: Color.White,
      })
    }

    if (type === 'default') {
      buttonProps.maskColor = 'rgba(0,0,0,0.025)'
      buttonProps.rippleColor = 'rgba(0,0,0,0.02)'
    }

    if (size === 'mini') {
      buttonStyle.push(
        style2pt({
          height: 42,
          paddingLeft: 10,
          paddingRight: 10,
        })
      )
      buttonTextStyle.push(
        style2pt({
          fontSize: 24,
        })
      )
    }

    if (border === false) {
      buttonStyle.push(
        style2pt({
          borderWidth: 0,
        })
      )
    }

    if (ripple === false) {
      buttonProps.maskColor = Color.Transparent
      buttonProps.rippleColor = Color.Transparent
    }

    if (ghost) {
      buttonStyle.push({
        backgroundColor: Color.Transparent,
      })

      if (type === 'primary') {
        buttonTextStyle.push({
          color: Color.Primary,
        })
      } else {
        buttonTextStyle.push({
          color: Color.White,
        })
      }
    }

    if (disabled) {
      if (type === 'primary') {
        buttonStyle.push({
          borderColor: Color.Disabled,
          backgroundColor: Color.Disabled,
        })
        if (ghost) {
          buttonStyle.push({
            backgroundColor: Color.Transparent,
          })
          buttonTextStyle.push({
            color: Color.Disabled,
          })
        }
      }
    }

    if (loading) {
      buttonProps.disabled = true
      buttonStyle.push({
        opacity: 0.65,
      })
    }

    const excludes = ['ImageBackground', 'Image']

    if (
      children &&
      children.type &&
      excludes.some(_ => _ === children.type.displayName)
    ) {
      buttonStyle.push({
        backgroundColor: Color.Transparent,
        borderColor: Color.Transparent,
        minWidth: null,
        paddingLeft: 0,
        paddingRight: 0,
        height: 'auto',
      })
    }

    buttonStyle.push(style)
    buttonTextStyle.push(textStyle)

    return (
      <MKButton
        maskColor="rgba(255,255,255,.15)"
        rippleColor="rgba(255,255,255,0.08)"
        {...buttonProps}
        style={buttonStyle}
      >
        {typeof children === 'string' ? (
          <Text style={buttonTextStyle}>{children}</Text>
        ) : (
          children
        )}
      </MKButton>
    )
  }
}

const styles = StyleSheet.create(
  style2pt({
    button: {
      width: '100%',
      height: 88,
      minWidth: 88,
      borderColor: Color.Border,
      backgroundColor: Color.Transparent,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      paddingLeft: 20,
      paddingRight: 20,
    },
    buttonText: {
      color: Color.Text,
      fontSize: 32,
    },
  })
)
