import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { MKTextField } from 'react-native-material-kit'
import { style2pt, Color, px2pt } from '../../utils/index'

class TextField extends React.Component {
  constructor() {
    super()
    this.state = {
      isFocus: false,
      labelWidth: 'auto',
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleFocus() {
    this.setState({
      isFocus: true,
    })
  }

  handleBlur() {
    this.setState({
      isFocus: false,
    })
  }

  render() {
    const {
      iconSource,
      inputProps = {},
      label,
      wrapperStyle,
      addon,
      inputStyles,
      height = 76,
      ripple = true,
    } = this.props
    const { isFocus } = this.state
    if (ripple === false) {
      inputProps.underlineEnabled = false
    }

    return (
      <View style={[style2pt({ height }), styles.inputWarpper, wrapperStyle]}>
        {addon ? (
          <View style={[style2pt({ height }), styles.addon, styles.addonAfter]}>
            {addon}
          </View>
        ) : null}
        {iconSource ? (
          <View
            style={[
              style2pt({ height }),
              styles.addon,
              styles.addonBefore,
              style2pt({ width: 58 }),
            ]}
          >
            <Image key="image" style={styles.icon} source={iconSource} />
            <View key="line" style={styles.line} />
          </View>
        ) : null}
        {label ? (
          <View
            style={[style2pt({ height }), styles.addon, styles.addonBefore]}
          >
            <Text
              onLayout={({ nativeEvent }) => {
                this.setState({
                  labelWidth: nativeEvent.layout.width,
                })
              }}
              style={style2pt({ color: Color.Text })}
            >
              {label}
            </Text>
          </View>
        ) : null}
        <MKTextField
          style={[styles.textField]}
          textInputStyle={[
            style2pt({ height }),
            styles.textInput,
            !iconSource ? styles.noIcon : null,
            isFocus ? styles.isFocus : null,
            inputStyles,
            label ? { paddingLeft: this.state.labelWidth } : null,
          ]}
          highlightColor={Color.Primary}
          underlineSize={px2pt(1)}
          underlineColorAndroid={Color.Transparent}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...inputProps}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create(
  style2pt({
    inputWarpper: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    addon: {
      position: 'absolute',
      top: 0,
      alignItems: 'center',
      flexDirection: 'row',
      zIndex: 9,
    },
    addonBefore: {
      left: 0,
      justifyContent: 'space-between',
    },
    addonAfter: {
      right: 0,
      justifyContent: 'flex-end',
    },
    textField: {
      flex: 1,
    },
    textInput: {
      paddingLeft: 80,
      fontSize: 28,
    },
    line: {
      width: 2,
      height: 36,
      backgroundColor: Color.Primary,
    },
  })
)

export default TextField
