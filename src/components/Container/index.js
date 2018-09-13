import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { NavigationEvents } from 'react-navigation'


const Container = () => {
  return (Wrapcomponent) => class Container extends PureComponent {
    static navigationOptions = Wrapcomponent.navigationOptions
    bindEvent = (event) => {
      this.refs.container[event] && this.refs.container[event]()
    }
    render(){
      
      return <View style={{flex: 1}}>
                <Wrapcomponent ref="container"/>
                <NavigationEvents
                  onWillFocus={this.bindEvent.bind(this,'onWillFocus')}
                  onDidFocus={this.bindEvent.bind(this,'onDidFocus')}
                  onWillBlur={this.bindEvent.bind(this,'onWillBlur')}
                  onDidBlur={this.bindEvent.bind(this,'onDidBlur')}
                />
              </View>
      }
   }
}

export default Container