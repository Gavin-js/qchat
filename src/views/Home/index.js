import React, { Component } from 'react'
import { Button, Text, View, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, StatusBar, NavigationIcon } from '../../components'
import { genNavigation } from '../../utils'
import styles from './styles'

class PageComponent extends Component {
    static navigationOptions = genNavigation(({ navigation }) => ({
        title: '消息',
        headerLeft: <Ionicons name="ios-people" size={25} color="#333" style={{ marginLeft: 10}} />,
        headerRight: <Ionicons name="ios-add" size={28} color="#333"  style={{ marginRight: 10}}/>,
    }))
    onWillBlur = () => {
        console.log('will blur')
    }
    onWillFocus = () => {
        console.log('will focus')
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar.Dark />
                <View style={styles.messages}>
                    <View style={styles.messageItem}>
                        <View style={styles.imageWrap}>
                            <Image style={styles.image} source={require('../../assets/qchat.png')}/>
                        </View>
                        <View style={styles.messageCon}>
                            <Text style={styles.messageTitle}>Q聊官方</Text>
                            <Text style={styles.messageDesc}>欢迎来到Q聊</Text>
                            <Text style={styles.time}>昨天</Text>
                        </View>
                    </View>
                </View>    
            </View>
        )
    }
}

export default Container()(PageComponent)