import { Toast } from '../components/index'

export default ({
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
