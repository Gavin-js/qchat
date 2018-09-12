import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native'
import { style2pt, Color } from '../../utils/index'
import Cursor from './Cursor'
import EncryptText from './EncryptText'

export default class CodeFiled extends PureComponent {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  onChange = (value) => {
    const { onChange } = this.props
    this.setState({
      value,
    })

    if (onChange) {
      onChange(value)
    }

    if (value.length === 6) {
      if (this.input) {
        this.input.blur()
      }
      if (this.props.onComplete) {
        this.props.onComplete(value)
      }
    }
  }

  onPressItem = () => {
    if (this.input) {
      this.input.focus()
    }
  }

  render() {
    const { length = 6, style, grid = false, inputProps } = this.props
    const { value } = this.state

    const TextInputProps = {
      underlineColorAndroid: Color.Transparent,
      maxLength: 6,
      style: styles.textInput,
      textInputStyle: styles.textInput,
      keyboardType: 'numeric',
      selectionColor: Color.Primary,
      autoFocus: true,
      blurOnSubmit: false,
      disableFullscreenUI: true,
      caretHidde: true,
      onChangeText: this.onChange,
      returnKeyType: 'done',
      ref: ref => (this.input = ref),
      onSubmitEditing: () => {
        if (this.input) {
          this.input.blur()
        }
      },
      ...inputProps,
    }

    return (
      <View style={style}>
        <TextInput {...TextInputProps} />
        <View style={styles.fields}>
          {Array.from({ length }).map((_, index) => {
            return (
              <TouchableWithoutFeedback onPress={this.onPressItem} key={index}>
                {grid ? (
                  <View
                    style={[
                      styles.gridItem,
                      value.length === index ? styles.gridItemActive : null,
                      length - 1 === index
                        ? style2pt({ borderRightWidth: 1 })
                        : null,
                    ]}
                  >
                    <EncryptText
                      style={styles.gridText}
                      value={value.split('')[index] || ''}
                    />
                    {/* <Text style={styles.gridText}></Text> */}
                  </View>
                ) : (
                  <View
                    style={[
                      styles.inputView,
                      value.length === index ? styles.inputActive : null,
                    ]}
                  >
                    <Text style={styles.input}>
                      {value.split('')[index] || ''}
                    </Text>
                    {value.length === index ? (
                      <Cursor style={styles.inputCursor} />
                    ) : null}
                  </View>
                )}
              </TouchableWithoutFeedback>
            )
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  style2pt({
    fields: {
      flexDirection: 'row',
    },
    input: {
      height: 78,
      fontSize: 60,
      paddingBottom: 14,
      textAlign: 'center',
      color: Color.Text,
      fontWeight: '600',
    },
    inputView: {
      marginLeft: 30,
      height: 79,
      width: 80,
      borderBottomWidth: 2,
      borderBottomColor: Color.Border,
      position: 'relative',
    },
    inputActive: {
      borderBottomColor: Color.Primary,
    },
    textInput: {
      width: 0,
      height: 0,
      opacity: 0,
    },
    inputCursor: {
      position: 'absolute',
      top: 0,
      left: 40,
    },
    gridItem: {
      width: 104,
      height: 104,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderBottomWidth: 1,
      borderColor: Color.Border,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gridText: {
      fontSize: 60,
      color: Color.Text,
      textAlignVertical: 'auto',
      fontWeight: '600',
    },
  })
)
