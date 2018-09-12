import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default class Cursor extends PureComponent {
  timeId = 0
  state = {
    waitTime: 0,
  }
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        waitTime: this.state.waitTime + 1,
      })
    }, 600)
  }
  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  render() {
    return this.state.waitTime % 2 ? (
      <View style={[styles.cursor, this.props.style]} />
    ) : null
  }
}

const styles = StyleSheet.create(
  style2pt({
    cursor: {
      width: 1,
      height: 64,
      backgroundColor: Color.Primary,
    },
  })
)
