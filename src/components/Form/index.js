import { PureComponent } from 'react'
import { Keyboard } from 'react-native'

class Form extends PureComponent {
  init = ({ namespace, componentWillUnmount }) => {
    this.timeId = 0
    const name = namespace.toLocaleLowerCase()

    this.handleChangeText = (key, value) => {
      const { dispatch } = this.props
      console.log(key, value)
      dispatch({
        type: `${name}/UPDATE`,
        payload: {
          [key]: value,
        },
      })
    }

    this.handleReset = () => {
      this.props.dispatch({
        type: `${name}/RESET`,
      })
      clearTimeout(this.timeId)
    }

    // this.componentDidMount = () => {
    //   // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    //   if (componentDidMount) componentDidMount()
    // }

    this.componentWillUnmount = () => {
      this.handleReset()
      if (this.keyboardDidHideListener) {
        this.keyboardDidHideListener.remove()
      }
      if (componentWillUnmount) componentWillUnmount()
    }
  }
  keyboardDidHide = () => {
    Keyboard.dismiss()
  }
}

export default Form
