import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Image, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, StatusBar } from '../../components'
// import { genNavigation } from '../../utils'
import styles from './styles'

class PageComponent extends Component {
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
          <View style={styles.article}>
            <FlatList
              data={Array(8).fill(0)}
              renderItem={() => (
                <TouchableOpacity style={styles.articleItem} activeOpacity={0.90} onPress={() => navigation.navigate('PostDetail')}>
                  <Text style={styles.articleTitle}>大魔王名不虚传！</Text>
                  <Text style={styles.articleDesc}>搞不清楚，到底是什么情况</Text>
                  <View style={styles.imageWrap}>
                    <Image style={styles.image} source={require('../../assets/qchat.png')} />
                  </View>
                  <View style={styles.user}>
                    <Image style={styles.avatar} source={require('../../assets/qchat.png')} />
                    <View style={styles.userInfo}>
                      <Text style={styles.userName}>Gavin</Text>
                      <Text style={styles.time}>8月20日</Text>
                    </View>
                    <View style={styles.tagsWrap}>
                      <Ionicons name="ios-pricetag" size={15} color="tomato" /><Text style={styles.tags}>前端</Text>
                    </View>
                  </View>
                  <View style={styles.options}>
                    <View style={styles.optionItem}>
                      <Ionicons name="ios-paper-plane" size={20} color="#999" style={styles.optionIcon} />
                      <Text style={styles.optionText}>66</Text>
                    </View>
                    <View style={styles.optionItem}>
                      <Ionicons name="ios-chatboxes" size={20} color="#999" style={styles.optionIcon} />
                      <Text style={styles.optionText}>66</Text>
                    </View>
                    <View style={styles.optionItem}>
                      <Ionicons name="ios-thumbs-up" size={20} color="#999" style={styles.optionIcon} />
                      <Text style={styles.optionText}>66</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                    )}
            />
          </View>
        </View>
      )
    }
}

export default Container()(PageComponent)
