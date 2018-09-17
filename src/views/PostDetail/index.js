import React, { Component } from 'react'
import { TextInput, Text, View, Image, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, StatusBar } from '../../components'
import { genNavigation, Color } from '../../utils'
import styles from './styles'

class PageComponent extends Component {
    static navigationOptions = genNavigation(({ navigation }) => ({
      title: '详情',
      headerLeft: <Ionicons name="ios-arrow-back" size={25} color="#333" onPress={() => navigation.goBack()} style={{ marginLeft: 10 }} />,
      headerRight: <Ionicons name="ios-more" size={25} color="#333" style={{ marginRight: 10 }} />,
    }))
    onWillBlur = () => {
      console.log('will blur')
    }
    onWillFocus = () => {
      console.log('will focus')
    }
    render() {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.container}>
            <StatusBar.Dark />
            <View style={styles.article}>
              <View style={styles.user}>
                <Image source={require('../../assets/qchat.png')} style={styles.avatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>Gavin</Text>
                  <Text style={styles.postTime}>09月16日</Text>
                </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.postTitle}>幽默逗比男女出街傻逛</Text>
                <Text style={styles.postDesc}>
                    幽默逗比男女出街傻逛幽默逗比男女出街傻逛幽默逗比男女
                    出街傻逛幽默逗比男女出街傻逛幽默逗比男女出街傻逛
                </Text>
                <Image source={require('../../assets/qchat.png')} resizeMode="contain" style={styles.postImage} />
              </View>
              <View style={styles.options}>
                <View style={styles.optionItem}>
                  <Ionicons name="ios-paper-plane" size={20} color="#999" style={styles.optionIcon} />
                  <Text style={styles.optionText}>分享</Text>
                </View>
                <View style={styles.optionItem}>
                  <Ionicons name="ios-thumbs-up" size={20} color="#999" style={styles.optionIcon} />
                  <Text style={styles.optionText}>赞</Text>
                </View>
              </View>
            </View>

            <View style={styles.comments}>
              <View style={styles.commentNavbar}>
                <View style={styles.commentNavbarItem}>
                  <Text style={styles.commentNavbarText}>全部回复</Text>
                  <Ionicons name="ios-arrow-down" size={20} color="#999" style={styles.commentNavbarIcon} />
                </View>
                <View style={styles.commentNavbarItem}>
                  <Text style={styles.commentNavbarText}>时间排序</Text>
                  <Ionicons name="ios-arrow-round-down" size={23} color="#999" style={styles.commentNavbarIcon} />
                </View>
              </View>
              <View style={styles.commentItem}>
                <View style={styles.commentUser}>
                  <Image source={require('../../assets/qchat.png')} style={styles.commentAvatar} />
                  <View style={styles.commentUserInfo}>
                    <View style={styles.commentUserMemo}>
                      <Text style={styles.commentUserName}>Gavin</Text>
                      <Text style={styles.commentPostTime}>1楼 09月16日</Text>
                    </View>
                    <View style={styles.commentUserZan}>
                      <Ionicons name="ios-thumbs-up" size={20} color="#999" style={styles.commentUserZanIcon} />
                      <Text style={styles.commentUserZanText}>2</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.commentCon}>
                  <Text style={styles.commentText}>好漂亮的妹子！</Text>
                  <View style={styles.reply}>
                    <View style={styles.replayItem}>
                      <Text style={styles.replyUser}>余生是你</Text>
                      <Text style={styles.replyText}>：你想干什么呢？</Text>
                    </View>
                    <View style={styles.replayItem}>
                      <Text style={styles.replyUser}>牛奶加咖啡</Text>
                      <Text style={styles.replyText}>：同求</Text>
                    </View>
                    <View style={styles.replayItem}>
                      <Text style={styles.replyMore}>查看2条评论</Text>
                      <Ionicons name="ios-arrow-forward" size={15} color={Color.Primary} style={styles.commentUserZanIcon} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.commentItem}>
                <View style={styles.commentUser}>
                  <Image source={require('../../assets/qchat.png')} style={styles.commentAvatar} />
                  <View style={styles.commentUserInfo}>
                    <View style={styles.commentUserMemo}>
                      <Text style={styles.commentUserName}>Gavin</Text>
                      <Text style={styles.commentPostTime}>1楼 09月16日</Text>
                    </View>
                    <View style={styles.commentUserZan}>
                      <Ionicons name="ios-thumbs-up" size={20} color="#999" style={styles.commentUserZanIcon} />
                      <Text style={styles.commentUserZanText}>2</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.commentCon}>
                  <Text style={styles.commentText}>好漂亮的妹子！</Text>
                  <View style={styles.reply}>
                    <View style={styles.replayItem}>
                      <Text style={styles.replyUser}>余生是你</Text>
                      <Text style={styles.replyText}>：你想干什么呢？</Text>
                    </View>
                    <View style={styles.replayItem}>
                      <Text style={styles.replyUser}>牛奶加咖啡</Text>
                      <Text style={styles.replyText}>：同求</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.fixedBottom}>
            <TextInput style={styles.replayInput} placeholder="有话要说..." />
            <View style={styles.fixedButtonWrap}>
              <Ionicons name="ios-text" size={25} color="#999" style={styles.fixedButton} />
              <Ionicons name="ios-heart-empty" size={25} color="#999" style={styles.fixedButton} />
              <Ionicons name="ios-thumbs-up" size={25} color="#999" style={styles.fixedButton} />
            </View>
          </View>
        </View>
      )
    }
}

export default Container()(PageComponent)
