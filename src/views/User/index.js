import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'

class PageComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}
                {/* <NavigationEvents
                    onWillFocus={payload => console.log('will focus', payload)}
                    onDidFocus={payload => console.log('did focus', payload)}
                    onWillBlur={payload => console.log('will blur', payload)}
                    onDidBlur={payload => console.log('did blur', payload)}
                /> */}
                <Button
                    title="Go to Chat"
                    onPress={() => this.props.navigation.navigate('Chat')}
                />
            </View>
        )
    }
}

export default PageComponent