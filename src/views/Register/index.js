import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import {
  TextField,
  TextRipple,
  Toast,
  StatusBar,
  Button,
} from '../../components/index'
import { style2pt, Color } from '../../utils/index'
import { appSendVerifyCode, appRegisterByMobile } from './action'
import styles from './styles'

let timeId = 0

class Register extends React.Component {
  constructor() {
    super()

    this.handleSwitchPassword = this.handleSwitchPassword.bind(this)
    this.handleGetCode = this.handleGetCode.bind(this)
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const { dispatch, mobile, mobile_code, password, invit } = this.props

    if (!/^[1][0-9]{10}$/.test(mobile)) {
      Toast.info('请输入正确的手机号')
      return
    }

    if (!mobile_code) {
      Toast.info('请输入验证码')
      return
    }
    if (!password) {
      Toast.info('请输入密码')
      return
    }
    if (password.length < 6) {
      Toast.info('不少于6位数或字母或特殊符号')
      return
    }

    Toast.loading('Loading...')
    dispatch(
      appRegisterByMobile(
        {
          mobile,
          mobile_code,
          password,
          invit,
        },
        ({ info }) => {
          Toast.success(info)
          this.props.navigation.navigate('Login')
          // setTimeout(() => {
          //   Modal.alert('提示', '前去实名认证', [
          //     {
          //       text: '暂时不用',
          //       onPress: () => {
          //         this.props.navigation.navigate('Login')
          //       },
          //     },
          //     {
          //       text: '去认证',
          //       onPress: () => {
          //         this.props.navigation.navigate('RealnameAuth')
          //       },
          //     },
          //   ])
          // }, 1500)
        },
        ({ info }) => {
          Toast.info(info)
        }
      )
    )
  }

  handleSwitchPassword() {
    this.props.dispatch({
      type: 'register/SWITCH_PASSWORD_VISIBLE',
    })
  }

  handleGetCode() {
    const { disableGetCode, dispatch, mobile } = this.props

    if (!/^[1][0-9]{10}$/.test(mobile)) {
      Toast.info('请输入正确的手机号')
      return
    }

    if (disableGetCode) {
      return
    }

    dispatch({
      type: 'register/UPDATE',
      payload: {
        disableGetCode: true,
      },
    })

    dispatch(
      appSendVerifyCode(
        {
          username: mobile,
          ostype: 1,
        },
        ({ info }) => {
          Toast.info(info)
          timeId = setInterval(() => {
            const { getCodeTime } = this.props
            if (getCodeTime > 2) {
              dispatch({
                type: 'register/COUNTDOWN',
              })
            } else {
              dispatch({
                type: 'register/RESET_COUNTDOWN',
              })
              clearInterval(timeId)
            }
          }, 1000)
        },
        ({ info }) => {
          Toast.info(info)
        }
      )
    )
  }

  handleChangeText(key, value) {
    const { dispatch } = this.props
    dispatch({
      type: 'register/UPDATE',
      payload: {
        [key]: value,
      },
    })
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'register/RESET',
    })
    clearTimeout(timeId)
  }

  render() {
    const {
      disableGetCode,
      getCodeTime,
      passwordVisble,
      mobile_code,
      mobile,
      password,
      navigation,
      dispatch,
    } = this.props

    const { navigate } = navigation

    const TextFieldProps = {
      wrapperStyle: style2pt({
        marginTop: 60,
      }),
    }

    return (
      <View style={styles.container}>
        <StatusBar.Dark />
        <View style={styles.titleWapper}>
          <Text style={styles.title}>手机号注册</Text>
        </View>
        <View style={style2pt({ marginTop: 98 })}>
          <TextField
            {...TextFieldProps}
            iconSource={require('../../assets/icon_phone_black_small.png')}
            inputProps={{
              returnKeyType: 'done',
              keyboardType: 'phone-pad',
              maxLength: 11,
              placeholder: '请输入手机号',
              onChangeText: this.handleChangeText.bind(this, 'mobile'),
              value: mobile,
            }}
          />
          <TextField
            {...TextFieldProps}
            iconSource={require('../../assets/icon_code_black.png')}
            inputProps={{
              returnKeyType: 'done',
              keyboardType: 'numeric',
              maxLength: 6,
              placeholder: '请输入验证码',
              onChangeText: this.handleChangeText.bind(this, 'mobile_code'),
              value: mobile_code,
            }}
            addon={
              <Button
                textStyle={{ color: Color.Placeholder }}
                size="mini"
                disabled={disableGetCode || getCodeTime < 61}
                onPress={this.handleGetCode}
              >
                {disableGetCode ? `${getCodeTime - 1}S后获取` : '获取验证码'}
              </Button>
            }
          />
          <TextField
            {...TextFieldProps}
            iconSource={require('../../assets/icon_lock_black_small.png')}
            inputProps={{
              returnKeyType: 'done',
              placeholder: '设置登录密码',
              maxLength: 16,
              secureTextEntry: !passwordVisble,
              password: !passwordVisble,
              onChangeText: this.handleChangeText.bind(this, 'password'),
              value: password,
            }}
            addon={
              <Button
                border={false}
                ghost
                type="primary"
                size="mini"
                style={{
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
                onPress={this.handleSwitchPassword}
              >
                <Image
                  source={
                    passwordVisble
                      ? require('../../assets/icon_eye_close_gray.png')
                      : require('../../assets/icon_eye_open_gray.png')
                  }
                />
              </Button>
            }
          />
        </View>
        <Button
          type="primary"
          onPress={this.handleSubmit}
          // disabled={!password || !mobile_code || !mobile}
          style={style2pt({
            marginTop: 120,
          })}
        >
          注册
        </Button>

        {/* <View style={styles.registerView}>
          <Text style={styles.registerText}>注册即代表您已同意</Text>
          <TextRipple
            wrapperStyle={styles.registerRuleWarpper}
            style={styles.registerRule}
          >
            用户协议
          </TextRipple>
        </View> */}

        <TextRipple
          onPress={() => {
            dispatch({
              type: 'register/RESET',
            })
            navigate('Login')
          }}
          style={styles.bottomLink}
          wrapperStyle={styles.bottomLinkWarp}
        >
          已有账号，立即登录
        </TextRipple>
      </View>
    )
  }
}

export default connect(state => state.register)(Register)
