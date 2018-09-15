import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
// import { NavigationActions } from 'react-navigation'
import Router from '../Router'
import auth from './auth'
import register from './register'

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = Router.router.getActionForPathAndParams('Home');
// const tempNavState = Router.router.getStateForAction(firstAction);
// const secondAction = Router.router.getActionForPathAndParams('Settings');
// const initialNavState = Router.router.getStateForAction({ type: NavigationActions.Init });

// function nav(state = initialNavState, action) {
//     let nextState;
//     switch (action.type) {
//         case 'Login':
//             nextState = Router.router.getStateForAction(
//                 NavigationActions.back(),
//                 state
//             );
//             break;
//         case 'Logout':
//             nextState = Router.router.getStateForAction(
//                 NavigationActions.navigate({ routeName: 'Login' }),
//                 state
//             );
//             break;
//         default:
//             nextState = Router.router.getStateForAction(action, state);
//             break;
//     }

//     // Simply return the original `state` if `nextState` is null or undefined.
//     return nextState || state;
// }

// const initialAuthState = { isLoggedIn: false };

// function auth(state = initialAuthState, action) {
//     switch (action.type) {
//         case 'Login':
//             return { ...state, isLoggedIn: true };
//         case 'Logout':
//             return { ...state, isLoggedIn: false };
//         default:
//             return state;
//     }
// }

const reducer = combineReducers({
  state: createNavigationReducer(Router),
  auth,
  register,
})

export default reducer
