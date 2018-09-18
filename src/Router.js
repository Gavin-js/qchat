import React from 'react'
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { style2pt } from './utils'
import AuthLoading from './views/AuthLoading'
import Home from './views/Home'
import Find from './views/Find'
import MailList from './views/MailList'
import Channel from './views/Channel'
import PostDetail from './views/PostDetail'
import Chat from './views/Chat'
import User from './views/User'
import Login from './views/Login'
import Register from './views/Register'


const HomeStack = createStackNavigator({
  Home,
  Chat,
  MailList,
  Find,
}, {
  initialRouteName: 'Home',
})
const ChannelStack = createStackNavigator({
  Channel: {
    screen: Channel,
    navigationOptions: {
      header: null,
    },
  },
  PostDetail,
}, {
  initialRouteName: 'Channel',
})

const UserStack = createStackNavigator({
  User: {
    screen: User,
    navigationOptions: {
      header: null,
    },
  },
})


const RootStack = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        tabBarLabel: 'Q聊',
        tabBarVisible: routeName === 'Home',
      }
    },
  },
  Channel: {
    screen: ChannelStack,
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        tabBarLabel: '频道',
        tabBarVisible: routeName === 'Channel',
      }
    },
  },
  User: {
    screen: UserStack,
    navigationOptions: () => ({
      tabBarLabel: '我的',
    }),
  },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Home') {
        iconName = 'ios-chatbubbles'
      } else if (routeName === 'Channel') {
        iconName = 'ios-radio'
      } else if (routeName === 'User') {
        iconName = 'ios-person'
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    labelStyle: style2pt({
      fontSize: 20,
    }),
    style: style2pt({
      paddingTop: 14,
      paddingBottom: 5,
      height: 98,
      backgroundColor: '#fff',
    }),
  },
  initialRouteName: 'Home',
})

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
})

export default createSwitchNavigator({
  AuthLoading,
  App: RootStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading',
})
