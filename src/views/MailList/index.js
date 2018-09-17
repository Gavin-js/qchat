import React from 'react'
import { View, TouchableOpacity, Animated } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { genNavigation, Color } from '../../utils'
import Friends from '../Friends'
import Follows from '../Follows'
import Fans from '../Fans'
import styles from './styles'


export default class MailList extends React.Component {
  static navigationOptions = genNavigation(({ navigation }) => ({
    title: '好友',
    headerLeft: <Ionicons name="ios-arrow-back" size={25} color="#333" onPress={() => navigation.goBack()} style={{ marginLeft: 10 }} />,
    headerRight: <Ionicons name="ios-person-add" size={25} color="#333" style={{ marginRight: 10 }} />,
    headerStyle: {
      borderBottomWidth: 0,
      shadowOpacity: 0,
    },
  }))

  state = {
    index: 0,
    routes: [
      { key: 'friends', title: '好友' },
      { key: 'follow', title: '关注' },
      { key: 'fans', title: '粉丝' },
    ],
  }

  render() {
    return (
      <TabView
        renderTabBar={(props) => {
          const inputRange = props.navigationState.routes.map((x, i) => i)

          return (
            <View style={styles.tabBar}>
              {props.navigationState.routes.map((route, i) => {
            const color = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(
                inputIndex => (inputIndex === i ? Color.Primary : Color.Title)
              ),
            })
            const fontSize = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(
                inputIndex => (inputIndex === i ? 20 : 16)
              ),
            })
            return (
              <TouchableOpacity
                style={styles.tabItem}
                key={i}
                onPress={() => this.setState({ index: i })}
              >
                <Animated.Text style={{
                  color,
                  fontSize,
                  }}
                >{route.title}
                </Animated.Text>
              </TouchableOpacity>
            )
          })}
            </View>
)
        }}
        navigationState={this.state}
        renderScene={SceneMap({
          friends: Friends,
          follow: Follows,
          fans: Fans,
        })}
        onIndexChange={index => this.setState({ index })}
        style={{ flex: 1 }}
      />
    )
  }
}
