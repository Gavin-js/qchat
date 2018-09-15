import { AsyncStorage } from 'react-native'
import { request } from '../../utils/index'

export const appSubmit = (params, success, fail) => {
  return (dispatch) => {
    return request({
      url: '/Api/Login/appSubmit',
      method: 'POST',
      data: params,
    }).then((data) => {
      if (data.status === 1) {
        dispatch({
          type: 'user/UPDATE',
          payload: data.data,
        })
        global.token = data.data.token

        AsyncStorage.setItem('token', data.data.token, (error) => {
          console.log(error)
        })

        if (success) {
          success(data)
        }
      } else if (fail) {
        fail(data)
      }
    })
  }
}
