import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import { style2pt, Color } from '../../utils'

class AuthLoading extends React.Component {
  constructor(props) {
    super(props)
    this.bootstrapAsync()
  }

    bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken')
      this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    }

    render() {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="default" />
          <ActivityIndicator size="large" color={Color.Primary} />
        </View>
      )
    }
}
const styles = StyleSheet.create(style2pt({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
}))
export default AuthLoading
