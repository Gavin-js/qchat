import { Toast } from 'antd-mobile-rn'

Toast.SHORT = 1
Toast.LONG = 10
const MyToast = { ...Toast }

const shortMethods = ['fail', 'success', 'offline', 'info']
shortMethods.forEach((key) => {
  MyToast[key] = (content, duration, onClose, mask) =>
    Toast[key](content, Toast.SHORT || duration, onClose, mask)
})
MyToast.loading = (content, duration, onClose, mask) =>
  Toast.loading(content || 'Loading...', Toast.LONG || duration, onClose, mask)

export default MyToast
