const initialAuthState = {
  isLoggedIn: false,
  username: '',
  password: '',
  passwordVisble: false,
}

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true }
    case 'Logout':
      return { ...state, isLoggedIn: false }
    case 'login/UPDATE':
      return {
        ...state,
        ...action.payload,
      }

    case 'login/RESET':
      return {
        username: '',
        password: '',
      }
    case 'login/SWITCH_PASSWORD_VISIBLE':
      return {
        ...state,
        passwordVisble: !state.passwordVisble,
      }
    default:
      return state
  }
}
