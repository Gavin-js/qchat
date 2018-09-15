const initialState = {
  disableGetCode: false,
  getCodeTime: 61,
  passwordVisble: false,
  mobile_code: '',
  mobile: '',
  password: '',
  invit: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'register/COUNTDOWN':
      return {
        ...state,
        disableGetCode: true,
        getCodeTime: state.getCodeTime - 1,
      }
    case 'register/RESET_COUNTDOWN':
      return {
        ...state,
        disableGetCode: false,
        getCodeTime: 61,
      }
    case 'register/SWITCH_PASSWORD_VISIBLE':
      return {
        ...state,
        passwordVisble: !state.passwordVisble,
      }
    case 'register/UPDATE':
      return {
        ...state,
        ...action.payload,
      }
    case 'register/RESET':
      return {
        disableGetCode: false,
        getCodeTime: 61,
        passwordVisble: false,
        mobile_code: '',
        mobile: '',
        password: '',
        invit: '',
      }
    default:
      return state
  }
}
