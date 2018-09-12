import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import Button from '../Button'
import { style2pt } from '../../utils/index'

export default class HeaderRightButton extends PureComponent {
  render() {
    const { to, navigation, fontStyle, children } = this.props
    return (
      <Button
        style={[styles.button]}
        textStyle={[
          style2pt({
            fontSize: 28,
            color: '#333',
          }),
          fontStyle,
        ]}
        border={false}
        onPress={() => {
          navigation.navigate(to)
        }}
      >
        {children}
      </Button>
    )
  }
}

const styles = StyleSheet.create(
  style2pt({
    button: {
      marginRight: 30,
    },
  })
)
