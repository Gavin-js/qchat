import { request } from '../../utils/index'

export function appSendVerifyCode(params, success, fail) {
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

export function appResetPWD(params, success, fail) {
  return () => {
    return request({
      url: '/Api/Login/appResetPWD',
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
