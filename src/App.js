import React from 'react'
import { BackHandler, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'

class AppNavigator extends React.Component {
  constructor() {
    super()
    this.lastBackPressed = false
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid)
  }

  onBackAndroid = () => {
    const { nav, dispatch } = this.props
    const { routes } = nav
    const { routeName } = routes[routes.length - 1]
    if (routeName != 'Home' && routeName != 'Login') {
      dispatch({ type: 'Navigation/BACK' })
    } else {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        return false
      }
      this.lastBackPressed = Date.now()
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
    }
    return true
  }
  render() {
    const { children } = this.props
    return children
  }
}
export default connect(state => ({
  state: state.state,
}))(AppNavigator)

