import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, StatusBar } from '../../components'
import { genNavigation } from '../../utils'
import styles from './styles'

class PageComponent extends Component {
    static navigationOptions = genNavigation(({ navigation }) => ({
      title: '消息',
      headerLeft: <Ionicons name="ios-people" size={25} onPress={() => navigation.navigate('MailList')} color="#333" style={{ marginLeft: 10 }} />,
      headerRight: <Ionicons name="ios-add" size={28} onPress={() => navigation.navigate('Find')} color="#333" style={{ marginRight: 10 }} />,
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
          <View style={styles.messages}>
            <TouchableOpacity
              style={styles.messageItem}
              onPress={() => navigation.navigate('Chat', { uid: '猿趴官方' })}
            >
              <View style={styles.imageWrap}>
                <Image style={styles.image} source={require('../../assets/qchat.png')} />
              </View>
              <View style={styles.messageCon}>
                <Text style={styles.messageTitle}>猿趴官方</Text>
                <Text style={styles.messageDesc}>欢迎来到猿趴</Text>
                <Text style={styles.time}>昨天</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

export default Container()(PageComponent)
