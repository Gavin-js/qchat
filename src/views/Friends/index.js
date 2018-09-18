import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, StatusBar } from '../../components'
import { genNavigation } from '../../utils'
import styles from './styles'

class PageComponent extends Component {
    static navigationOptions = genNavigation(() => ({
      title: '好友',
      headerLeft: <Ionicons name="ios-arrow-back" size={25} color="#333" style={{ marginLeft: 10 }} />,
      headerRight: <Ionicons name="ios-person-add" size={25} color="#333" style={{ marginRight: 10 }} />,
    }))
    onWillBlur = () => {
      console.log('will blur')
    }
    onWillFocus = () => {
      console.log('will focus')
    }
    render() {
      const { navigation } = this.props
      return (
        <View style={styles.container}>
          <StatusBar.Dark />
          <View style={styles.friends}>
            <TouchableOpacity
              style={styles.friendItem}
              onPress={() => navigation.navigate('Chat', { uid: '猿趴官方' })}
            >
              <View style={styles.imageWrap}>
                <Image style={styles.image} source={require('../../assets/qchat.png')} />
              </View>
              <Text style={styles.friendTitle}>猿趴官方</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

export default Container()(PageComponent)
