import { Platform, AsyncStorage } from 'react-native'
import queryString from 'qs'
import Toast from '../components/Toast/'
import encrypt from './encrypt'
import { navigate } from './navigate'

const getToken = () =>
  new Promise((resolve) => {
    if (global.token) {
      resolve(global.token)
    } else {
      try {
        AsyncStorage.getItem('token', (error, result) => {
          resolve(result)
        })
      } catch (error) {
        resolve('')
      }
    }
  })

const getEnv = () => new Promise((resolve) => {
  if (global.env) {
    resolve(global.env)
  } else {
    try {
      AsyncStorage.getItem(
        'env',
        (error, result) => {
          resolve(result)
        }
      )
    } catch (error) {
      resolve('')
    }
  }
})

const _fetch = (fetchPromise, timeout) => {
  let abortFn = null

  const abortPromise = new Promise((resolve, reject) => {
    abortFn = () => {
      reject('timeout')
    }
  })

  const abortablePromise = Promise.race([fetchPromise, abortPromise])

  setTimeout(() => {
    abortFn()
  }, timeout)

  return abortablePromise
}

const request = async ({ url, method = 'POST', data = {}, headers = {} }) => {
  const prefix = {
    dev: 'https://devgene.btcbing.com',
    test: 'https://tstgene.btcbing.com',
    release: 'https://gene.btcbing.com',
  }

  const env = await getEnv()
  const token = await getToken()

  const defaultParams = {
    token,
    ostype: Platform.OS === 'ios' ? 1 : 2,
  }
  if (data.password) {
    data.password = encrypt(data.password)
  }
  if (data.pay_password) {
    data.pay_password = encrypt(data.pay_password)
  }
  if (data.re_pay_password) {
    data.re_pay_password = encrypt(data.re_pay_password)
  }

  const requestData = headers['Content-Type']
    ? data
    : { ...data, ...defaultParams }
  return _fetch(
    fetch(prefix[env || 'dev'] + url, {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ostype: Platform.OS === 'ios' ? 1 : 2,
        ...headers,
      },
      body: headers['Content-Type']
        ? data
        : queryString.stringify({ ...data, ...defaultParams }),
    }),
    10000
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      if (__DEV__) {
        console.log('\n\n')
        console.group(
          '%c Request ',
          'color: black; background: rgba(15,220,93,1); font-weight: bold',
          prefix[env || 'dev'] + url
        )
        console.log(
          '%c Params ',
          'color: #e14cf7; font-weight: bold; font-size:12px',
          requestData
        )
        console.log(
          '%c Result ',
          'color: #3b99fc; font-weight: bold; font-size:12px',
          data
        )
        console.groupEnd()
        console.log('\n\n')
      }
      if (data.status === 1) {
        return data
      } else if (data.status === -1) {
        navigate('Login')
      } else {
        return data
      }
    })
    .catch((error) => {
      if (error == 'timeout') {
        Toast.info('网络请求超时，请检查网络')
      }
    })
}

export default request
