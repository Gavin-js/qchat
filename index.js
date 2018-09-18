import React from 'react'
import {AppRegistry} from 'react-native'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import { logger } from 'redux-logger'
import AppReducer from './src/reducers'
import AppNavigator from './src/App'
import Router from './src/Router'
import {name as appName} from './app.json'

console.disableYellowBox = true

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.state
  )
  
const store = createStore(AppReducer, applyMiddleware(middleware, thunk, logger))
  
const AppWithNavigationState = connect(state => ({
    state: state.state,
  }))(reduxifyNavigator(Router, 'root'))
class App extends React.Component {
  
    render() {
      return (
        <Provider store={store}>
          <AppNavigator>
            <AppWithNavigationState/>
          </AppNavigator>
        </Provider>
      )
    }
  }

AppRegistry.registerComponent(appName, () => App)
