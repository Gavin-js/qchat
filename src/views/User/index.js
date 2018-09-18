import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-navigation'
import { Container, StatusBar } from '../../components'
import styles from './styles'
import { style2pt } from '../../utils'

class PageComponent extends Component {
    onWillBlur = () => {
      console.log('will blur')
    }
    onWillFocus = () => {
      console.log('will focus')
    }
    render() {
      return (
        <SafeAreaView style={styles.container} forceInset={{ top: 0 }}>
          <StatusBar.Dark />
          <View style={styles.userWrap}>
            <Image style={style2pt({ width: '100%', height: 59, marginTop: -5 })} source={require('../../assets/thumbnail_colors-top.png')} resizeMode="contain" />
            <View style={styles.user}>
              <View style={styles.userCon}>
                <Text style={styles.userName}>前男友</Text>
                <View style={styles.profileLink}>
                  <Text style={styles.profile}>修改个人资料</Text>
                  <Ionicons size={15} name="ios-arrow-forward" color="#666" />
                </View>
              </View>
              <Image style={styles.avatar} source={require('../../assets/qchat.png')} />
            </View>
            <View style={styles.memo}>
              <View style={styles.memoItem}>
                <Text style={styles.memoValue}>16</Text>
                <Text style={styles.memoLabel}>好友</Text>
              </View>
              <View style={styles.memoItem}>
                <Text style={styles.memoValue}>1</Text>
                <Text style={styles.memoLabel}>关注</Text>
              </View>
              <View style={styles.memoItem}>
                <Text style={styles.memoValue}>1</Text>
                <Text style={styles.memoLabel}>粉丝</Text>
              </View>
              <View style={styles.memoItem}>
                <Text style={styles.memoValue}>0</Text>
                <Text style={styles.memoLabel}>群聊</Text>
              </View>
            </View>
          </View>

          <View style={styles.list}>
            <View style={styles.listItem}>
              <Ionicons size={20} name="ios-notifications" color="#ff6889" />
              <Text style={styles.listCon}>通知</Text>
              <Ionicons size={15} name="ios-arrow-forward" color="#666" />
            </View>
            <View style={styles.listItem}>
              <Ionicons size={20} name="ios-thumbs-up" color="#ffcd3c" />
              <Text style={styles.listCon}>赞过</Text>
              <Ionicons size={15} name="ios-arrow-forward" color="#666" />
            </View>
            <View style={styles.listItem}>
              <Ionicons size={20} name="ios-heart" color="#58e4e1" />
              <Text style={styles.listCon}>收藏</Text>
              <Ionicons size={15} name="ios-arrow-forward" color="#666" />
            </View>
            <View style={styles.listItem}>
              <Ionicons size={20} name="ios-settings" color="#8891ff" />
              <Text style={styles.listCon}>设置</Text>
              <Ionicons size={15} name="ios-arrow-forward" color="#666" />
            </View>
          </View>
        </SafeAreaView>
      )
    }
}

export default Container()(PageComponent)
