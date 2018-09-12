import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Modal from '../Modal'
import { style2pt, Color } from '../../utils/index'

export default class PasswordConfirm extends PureComponent {
  state = {
    error: false,
    password: '',
  }

  onInputPassword = (text) => {
    this.setState({
      password: text,
      error: false,
    })
  }

  handleSubmit = () => {
    const { password } = this.state
    const { onSubmit } = this.props
    if (!password) {
      this.setState({
        error: true,
      })
      return
    }
    if (typeof onSubmit === 'function') {
      onSubmit(password)
    }
  }
  render() {
    const { visible, onClose } = this.props
    const { error } = this.state
    return (
      <Modal
        title="请输入交易密码"
        visible={visible}
        closable
        transparent
        maskClosable
        onClose={onClose}
        footer={[
          {
            text: '确定',
            onPress: () => this.handleSubmit(),
            style: {
              color: Color.Primary,
            },
          },
        ]}
      >
        <View style={styles.wrap}>
          <TextInput
            style={styles.ModalTextInput}
            underlineColorAndroid="transparent"
            placeholder="请输入交易密码"
            placeholderTextColor="#bfbfbf"
            autoFocus
            secureTextEntry
            onChangeText={this.onInputPassword}
            value={this.state.password}
            returnKeyType="done"
          />
          {error ? <Text style={styles.error}>请输入交易密码！</Text> : null}
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create(
  style2pt({
    wrap: {
      margin: 10,
      marginTop: 50,
      marginBottom: 0,
    },
    ModalTextInput: {
      width: '100%',
      height: 80,
      borderWidth: 1,
      borderColor: '#d8d8d8',
      borderRadius: 2,
      paddingLeft: 20,
      paddingRight: 20,
    },
    error: {
      color: 'red',
      textAlign: 'center',
      lineHeight: 35,
      marginTop: 10,
    },
  })
)
