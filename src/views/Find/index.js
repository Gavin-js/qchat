import React from 'react'
import { View, TouchableOpacity, Animated, Text } from 'react-native'
import { TabView } from 'react-native-tab-view'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { genNavigation, Color } from '../../utils'
import { TextField } from '../../components'
import styles from './styles'


const FindPerson = () => (
  <View style={styles.container}>
    <View style={styles.textField}>
      <TextField
        sufix={<Ionicons name="ios-search" size={25} color={Color.Primary} />}
        inputProps={{
          underlineEnabled: false,
          underlineSize: 0,
          placeholder: '猿趴ID',
        }}
      />
    </View>
    <View style={styles.findWrap}>
      <View style={styles.findItem}>
        <View style={styles.phoneIcon}><Ionicons name="ios-phone-portrait" size={20} color="#fff" /></View>
        <Text style={styles.findItemText}>添加手机联系人</Text>
      </View>
      <View style={styles.findItem}>
        <View style={styles.scanIcon}><Ionicons name="ios-qr-scanner" size={20} color="#fff" /></View>
        <Text style={styles.findItemText}>扫一扫</Text>
      </View>
    </View>
  </View>
)

const FindGroup = () => (
  <View style={styles.container}>
    <View style={styles.textField}>
      <TextField
        sufix={<Ionicons name="ios-search" size={25} color={Color.Primary} />}
        inputProps={{
          underlineEnabled: false,
          underlineSize: 0,
          placeholder: '群聊ID',
        }}
      />
    </View>
    <View style={styles.findWrap}>
      <View style={styles.findItem}>
        <View style={styles.scanIcon}><Ionicons name="ios-qr-scanner" size={20} color="#fff" /></View>
        <Text style={styles.findItemText}>扫一扫</Text>
      </View>
    </View>
  </View>
)

export default class MailList extends React.Component {
  static navigationOptions = genNavigation(({ navigation }) => ({
    title: '查找',
    headerLeft: <Ionicons name="ios-arrow-back" size={25} color="#333" onPress={() => navigation.goBack()} style={{ marginLeft: 10 }} />,
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
      { key: 'findperson', title: '找人' },
      { key: 'findgroup', title: '找群' },
    ],
  }

  render() {
    return (
      <TabView
        style={styles.container}
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
                case 'findperson':
                    return <FindPerson {...this.props} />
                case 'findgroup':
                    return <FindGroup {...this.props} />
                default:
                    return null
            }
        }}
        onIndexChange={index => this.setState({ index })}
      />
    )
  }
}
