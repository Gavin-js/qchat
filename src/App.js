import React from 'react'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

import AppReducer from './reducers'

import Router from './Router'


const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.state
)

const store = createStore(AppReducer, applyMiddleware(middleware))


const AppWithNavigationState = reduxifyNavigator(Router, 'root')

const mapStateToProps = state => ({
  state: state.state,
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

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
