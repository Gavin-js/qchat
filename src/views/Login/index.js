import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, AsyncStorage } from 'react-native'
import {
  TextField,
  TextRipple,
  Toast,
  StatusBar,
  Button,
} from '../../components/index'
import { style2pt, Color } from '../../utils/index'
import styles from './styles'

class Login extends Component {
  constructor() {
    super()

    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSwitchPassword = this.handleSwitchPassword.bind(this)
  }

  handleSubmit = async () => {
    const { dispatch, username, password } = this.props
    if (!/^[1][0-9]{10}$/.test(username)) {
      Toast.info('请输入正确的手机号')
      return
    }
    if (!password) {
      Toast.info('请输入登录密码')
      return
    }

    // Toast.loading('Loading...')
    await AsyncStorage.setItem('userToken', 'Gavin')
    this.props.navigation.navigate('App')
    dispatch({
      type: 'login/RESET',
    })
    dispatch({
      type: 'Login',
    })
    // dispatch(
    //   appSubmit(
    //     {
    //       username,
    //       password,
    //     },
    //     ({ info }) => {
    //       Toast.success(info)
    //       this.props.navigation.navigate('Home')

    //       dispatch({
    //         type: 'login/RESET',
    //       })
    //     },
    //     ({ info }) => {
    //       Toast.info(info)
    //     }
    //   )
    // )
  }

  handleChangeText(key, value) {
    const { dispatch } = this.props

    if (value === '***test***') {
      this.props.navigation.navigate('Test')
    }

    dispatch({
      type: 'login/UPDATE',
      payload: {
        [key]: value,
      },
    })
  }

  handleSwitchPassword() {
    this.props.dispatch({
      type: 'login/SWITCH_PASSWORD_VISIBLE',
    })
  }

  render() {
    const {
      username,
      password,
      passwordVisble,
      navigation,
      dispatch,
    } = this.props
    const { navigate } = navigation

    const TextFieldProps = {
      wrapperStyle: styles.textFieldWarpper,
    }

    return (
      <View style={styles.container}>
        <StatusBar.Dark />
        <View style={styles.titleWapper}>
          <Text style={styles.title}>手机号登录</Text>
        </View>
        <View style={styles.contentWarpper}>
          <TextField
            {...TextFieldProps}
            key="username"
            iconSource={require('../../assets/icon_phone_black_small.png')}
            inputProps={{
              placeholder: '请输入手机号',
              onChangeText: this.handleChangeText.bind(this, 'username'),
              value: username,
              keyboardType: 'phone-pad',
              maxLength: 11,
              returnKeyType: 'done',
            }}
          />
          <TextField
            {...TextFieldProps}
            key="password"
            iconSource={require('../../assets/icon_lock_black_small.png')}
            inputProps={{
              placeholder: '请输入登录密码',
              secureTextEntry: !passwordVisble,
              password: !passwordVisble,
              onChangeText: this.handleChangeText.bind(this, 'password'),
              value: password,
              maxLength: 16,
              returnKeyType: 'done',
            }}
            addon={
              <Button
                border={false}
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
        <TextRipple
          onPress={() => {
            this.props.dispatch({
              type: 'login/RESET',
            })
            this.props.navigation.navigate('ForgetPassword')
          }}
          style={style2pt({
            color: Color.Desc,
            fontSize: 26,
          })}
          wrapperStyle={style2pt({
            marginTop: 20,
            width: '100%',
            alignItems: 'flex-end',
          })}
        >
          忘记密码
        </TextRipple>

        <Button
          type="primary"
          style={style2pt({
            marginTop: 110,
          })}
          onPress={this.handleSubmit}
          // disabled={!password || !username}
        >
          登录
        </Button>

        <TextRipple
          onPress={() => {
            dispatch({
              type: 'login/RESET',
            })
            console.log(this.props.navigation)
            navigate('Register')
          }}
          style={styles.bottomLink}
          wrapperStyle={styles.bottomLinkWarp}
        >
          创建账号
        </TextRipple>
      </View>
    )
  }
}

export default connect(state => state.auth)(Login)
