import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'

class StatusBarHide extends PureComponent {
  render() {
    return (
      <StatusBar
        hidden
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="light-content"
      />
    )
  }
}

class StatusBarLight extends PureComponent {
  render() {
    return (
      <StatusBar
        hidden={false}
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="light-content"
      />
    )
  }
}

class StatusBarDark extends PureComponent {
  render() {
    return (
      <StatusBar
        hidden={false}
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
    )
  }
}

export default {
  Hide: StatusBarHide,
  Light: StatusBarLight,
  Dark: StatusBarDark,
}
