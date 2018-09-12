import React, { Component } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { Container, StatusBar } from '../../components'
import styles from './styles'

class PageComponent extends Component {
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
                <Button
                    title="Go to Chat"
                    onPress={() => this.props.navigation.navigate('Chat')}
                />
            </View>
        )
    }
}

export default Container()(PageComponent)