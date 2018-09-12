import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { style2pt } from '../../utils/index'

export default class Simple extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Simple component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  style2pt({
    container: {
      flex: 1,
      paddingTop: 10,
    },
  })
)
