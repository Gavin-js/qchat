import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, StatusBar } from '../../components'
import { genNavigation } from '../../utils'
import styles from './styles'

class PageComponent extends Component {
    static navigationOptions = genNavigation(() => ({
      title: '粉丝',
      headerLeft: <Ionicons name="ios-people" size={25} color="#333" style={{ marginLeft: 10 }} />,
      headerRight: <Ionicons name="ios-add" size={28} color="#333" style={{ marginRight: 10 }} />,
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
          <View style={styles.fans}>
            <TouchableOpacity
              style={styles.fanItem}
              onPress={() => navigation.navigate('Chat', { uid: 'Q聊官方' })}
            >
              <View style={styles.imageWrap}>
                <Image style={styles.image} source={require('../../assets/qchat.png')} />
              </View>
              <View style={styles.fanCon}>
                <Text style={styles.fanTitle}>Q聊官方</Text>
                <Text style={styles.fanDesc}>欢迎来到Q聊</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

export default Container()(PageComponent)
