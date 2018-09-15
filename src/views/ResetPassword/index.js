import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { style2pt, Color, genNavigation } from '../../utils/index'
import { TextField, Toast, Button } from '../../components/index'
import { appSendVerifyCode, appResetPWD } from './action'

let TimeId = 0

class ResetPassword extends Component {
  static navigationOptions = genNavigation({
    title: '重置登录密码',
  })

  constructor() {
    super()
    this.handleGetCode = this.handleGetCode.bind(this)
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleGetCode() {
    const { disableGetCode, dispatch, username } = this.props

    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(username)) {
      Toast.info('请输入正确的手机号', 1)
      return
    }

    if (disableGetCode) {
      return
    }

    dispatch({
      type: 'resetpassword/UPDATE',
      payload: {
        disableGetCode: true,
      },
    })

    dispatch(
      appSendVerifyCode(
        {
          username,
        },
        ({ info }) => {
          Toast.info(info)

          TimeId = setInterval(() => {
            const { getCodeTime } = this.props
            if (getCodeTime > 2) {
              dispatch({
                type: 'resetpassword/COUNTDOWN',
              })
            } else {
              dispatch({
                type: 'resetpassword/RESET_COUNTDOWN',
              })
              clearInterval(TimeId)
            }
          }, 1000)
        },
        ({ info }) => {
          Toast.info(info)
        }
      )
    )
  }

  handleSubmit() {
    const { dispatch, username, code, password, invit } = this.props

    if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(username)) {
      Toast.info('请输入正确的手机号', 1)
      return
    }

    if (!code) {
      Toast.info('请输入验证码', 1)
      return
    }
    if (!password) {
      Toast.info('请输入密码', 1)
      return
    }
    if (password.length < 6) {
      Toast.info('不少于6位数或字母或特殊符号', 1)
      return
    }

    Toast.loading('Loading...')
    dispatch(
      appResetPWD(
        {
          username,
          code,
          password,
          invit,
        },
        ({ info }) => {
          Toast.success(info, 1)

          this.props.navigation.navigate('Login')
        },
        ({ info }) => {
          Toast.info(info, 1)
        }
      )
    )
  }

  handleChangeText(key, value) {
    const { dispatch } = this.props
    dispatch({
      type: 'resetpassword/UPDATE',
      payload: {
        [key]: value,
      },
    })
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'resetpassword/RESET',
    })
    clearTimeout(TimeId)
  }

  render() {
    const { disableGetCode, getCodeTime, code, username, password } = this.props

    const TextFieldProps = {
      height: 96,
      inputStyles: style2pt({
        paddingLeft: 0,
        fontSize: 28,
      }),
      ripple: false,
    }
    return (
      <View
        style={style2pt({
          backgroundColor: Color.Background,
          flex: 1,
        })}
      >
        <View
          style={style2pt({ backgroundColor: Color.White, paddingLeft: 30 })}
        >
          <TextField
            {...TextFieldProps}
            inputProps={{
              placeholder: '请输入手机号',
              onChangeText: this.handleChangeText.bind(this, 'username'),
              keyboardType: 'phone-pad',
              maxLength: 11,
              returnKeyType: 'done',
              value: username,
            }}
          />
          <TextField
            {...TextFieldProps}
            inputProps={{
              placeholder: '请输入短信验证码',
              value: code,
              returnKeyType: 'done',
              keyboardType: 'numeric',
              maxLength: 6,
              onChangeText: this.handleChangeText.bind(this, 'code'),
            }}
            addon={
              <View
                style={style2pt({
                  paddingRight: 30,
                })}
              >
                <Button
                  size="mini"
                  type="primary"
                  ghost
                  disabled={disableGetCode || getCodeTime < 61}
                  onPress={this.handleGetCode}
                >
                  {disableGetCode ? `${getCodeTime - 1}S后获取` : '获取验证码'}
                </Button>
              </View>
            }
          />
          <TextField
            {...TextFieldProps}
            inputProps={{
              onChangeText: this.handleChangeText.bind(this, 'password'),
              placeholder: '重置登录密码（6-16位字母、数字或特殊符号）',
              returnKeyType: 'done',
              secureTextEntry: true,
              password: true,
              maxLength: 16,
              value: password,
              underlineSize: 0,
            }}
          />
        </View>
        <View
          style={style2pt({
            paddingLeft: 50,
            paddingRight: 50,
            marginTop: 60,
          })}
        >
          <Button
            type="primary"
            onPress={this.handleSubmit}
            disabled={!password || !username}
          >
            确认
          </Button>
        </View>
      </View>
    )
  }
}

export default connect(state => state.resetpassword)(ResetPassword)
