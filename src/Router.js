import React from 'react'
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { style2pt } from './utils'
import Home from './views/Home'
import Channel from './views/Channel'
import Chat from './views/Chat'
import User from './views/User'


const HomeStack = createStackNavigator({
  Home,
  Chat,
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
})

const UserStack = createStackNavigator({
  User: {
    screen: User,
    navigationOptions: {
      header: null,
    },
  },
})
const ChannelTab = createMaterialTopTabNavigator({
  Channel: {
    screen: ChannelStack,
    navigationOptions: () => ({
      tabBarLabel: '精华',
    }),
  },
  Channel1: {
    screen: ChannelStack,
    navigationOptions: () => ({
      tabBarLabel: '广场',
    }),
  },
}, {
  tabBarOptions: {
    indicatorStyle: {
      height: 0,
    },
    pressOpacity: 1,
    activeTintColor: 'tomato',
    inactiveTintColor: '#333333',
    labelStyle: style2pt({
      fontSize: 30,
    }),
    tabStyle: style2pt({
      width: 150,
    }),
    style: style2pt({
      paddingTop: 20,
      paddingBottom: 5,
      height: 100,
      backgroundColor: '#fff',
    }),
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
    screen: ChannelTab,
    navigationOptions: () => ({
      tabBarLabel: '频道',
    }),
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
        iconName = 'ios-globe'
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

export default createSwitchNavigator({
  RootStack,
})
