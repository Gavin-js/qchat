import React from 'react'
import { View, TouchableOpacity, Animated } from 'react-native'
import { TabView } from 'react-native-tab-view'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { genNavigation, Color } from '../../utils'
import DistillatPosts from '../DistillatPosts'
import Posts from '../Posts'
import styles from './styles'


export default class MailList extends React.Component {
  static navigationOptions = genNavigation(({ navigation }) => ({
    title: '频道',
    headerLeft: <Ionicons name="ios-arrow-back" size={25} color="#333" onPress={() => navigation.goBack()} style={{ marginLeft: 10 }} />,
    headerRight: <Ionicons name="ios-person-add" size={25} color="#333" style={{ marginRight: 10 }} />,
    headerStyle: {
      borderBottomWidth: 0,
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
      shadowColor: 'rgba(0,0,0,0)',
    },
  }))

  state = {
    index: 0,
    routes: [
      { key: 'distillat', title: '精选' },
      { key: 'posts', title: '广场' },
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
        renderScene={({ route }) => {
            switch (route.key) {
                case 'distillat':
                    return <DistillatPosts {...this.props} />
                case 'posts':
                    return <Posts {...this.props} />
                default:
                    return null
            }
        }}
        onIndexChange={index => this.setState({ index })}
        style={{ flex: 1 }}
      />
    )
  }
}
