import React from 'react'
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { style2pt } from './utils'
import Home from './views/Home'
import Chat from './views/Chat'
import User from './views/User'


const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
          header: null,
        },
      },
    Chat,
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
        navigationOptions: () => ({
            tabBarLabel: 'Q聊',
        })
    },
    Channel: {
        screen: HomeStack,
        navigationOptions: () => ({
            tabBarLabel: '频道',
        })
    },
    User: {
        screen: UserStack,
        navigationOptions: () => ({
            tabBarLabel: '我的',
        })
    },
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-chatbubbles`
                } else if (routeName === 'Channel') {
                    iconName = `ios-globe`
                } else if (routeName === 'User') {
                    iconName = `ios-contact`
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
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
    })

    export default createSwitchNavigator({
        RootStack,
    })