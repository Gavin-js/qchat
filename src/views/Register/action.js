import { AsyncStorage } from 'react-native'
import { request } from '../../utils/index'

export const appSendVerifyCode = (params, success, fail) => {
  return () => {
    return request({
      url: '/Api/Login/appSendVerifyCode',
      method: 'POST',
      data: params,
    }).then((data) => {
      if (data.status) {
        success(data)
      } else {
        fail(data)
      }
    })
  }
}

export const appRegisterByMobile = (params, success, fail) => {
  return (dispatch) => {
    return request({
      url: '/Api/Login/appRegisterByMobile',
      method: 'POST',
      data: params,
    }).then((data) => {
      if (data.status) {
        dispatch({
          type: 'user/UPDATE',
          payload: data.data,
        })

        global.token = data.data.token

        AsyncStorage.setItem('token', data.data.token, (error) => {
          console.log(error)
        })

        success(data)
      } else {
        fail(data)
      }
    })
  }
}
