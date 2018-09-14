import React from 'react'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import { logger } from 'redux-logger'
import AppReducer from './reducers'
import Router from './Router'


const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.state
)

const store = createStore(AppReducer, applyMiddleware(middleware, thunk, logger))


const AppWithNavigationState = reduxifyNavigator(Router, 'root')


const AppNavigator = connect(state => ({
  state: state.state,
}))(AppWithNavigationState)

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default Root
