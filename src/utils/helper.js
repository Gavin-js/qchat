import { Toast } from '../components/index'

const handleResult = ({
  result,
  success,
  successInfo = false,
  fail,
  failInfo = true,
}) => {
  const { data, info, status } = result
  if (status === 1) {
    if (successInfo) Toast.success(info)
    if (success) success(data)
  } else {
    if (failInfo) Toast.info(info)
    if (fail) fail(data)
  }
}

const genFetch = ({ fetch, result }) => {
  return (params, callback) => {
    if (!callback) {
      Toast.loading()
    }
    fetch()
      .then((res) => {
        if (res instanceof Array) {
          res.forEach((item, index) => {
            handleResult({
              result: item,
              ...result[index],
            })
          })
        } else {
          handleResult({
            result: res,
            ...result,
          })
        }
      })
      .finally(() => {
        Toast.hide()
        if (callback) callback()
      })
  }
}

export { handleResult, genFetch }
