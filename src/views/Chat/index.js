
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MessageList, ChatInput, AuroraIMUIController } from 'aurora-imui-react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { style2pt, genNavigation } from '../../utils'

class Chat extends React.Component {
    static navigationOptions = genNavigation(({ navigation }) => ({
      title: navigation.getParam('uid') || '聊天',
      headerLeft: <Ionicons name="ios-arrow-back" size={25} color="#333" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />,
      headerRight: <Ionicons name="ios-person" size={25} color="#333" style={{ marginRight: 10 }} />,
    }))
    state = {
      chatInputHeight: 80,
    }
    componentWillMount() {
      AuroraIMUIController.addMessageListDidLoadListener(() => {
        const messages = [{
          msgId: '1',
          status: 'send_succeed',
          msgType: 'text',
          text: 'This',
          isOutgoing: true,
          fromUser: {
            userId: '1',
            displayName: 'Gavin',
            avatarPath: 'https://www.btcbing.com/Public/images/icon/BTC.png',
          },
          timeString: '10:00',
        }, {
          msgId: '2',
          status: 'send_succeed',
          msgType: 'text',
          text: 'is',
          isOutgoing: false,
          fromUser: {
            userId: '1',
            displayName: 'Ken',
            avatarPath: 'https://www.btcbing.com/Public/images/icon/BTC.png',
          },
          timeString: '10:10',
        }, {
          msgId: '3',
          status: 'send_succeed',
          msgType: 'text',
          text: 'example',
          isOutgoing: true,
          fromUser: {
            userId: '1',
            displayName: 'Ken',
            avatarPath: 'https://www.btcbing.com/Public/images/icon/BTC.png',
          },
          timeString: '10:20',
        }]
        AuroraIMUIController.insertMessagesToTop(messages)
      })
    }
    render() {
      const { chatInputHeight } = this.state
      return (
        <View style={styles.container}>
          <MessageList
            style={styles.messageList}
            isShowDisplayName={false}
            onTouchMsgList={() => {
                    AuroraIMUIController.hidenFeatureView(true)
                }}
          />
          <ChatInput
            style={[styles.chatInput, { height: chatInputHeight }]}
            chatInputBackgroupColor="#ffffff"
                // customLayoutItems={{
                //     left: ['voice'],
                //     right: ['send'],
                //     bottom: ['gallery','emoji','camera']
                // }}
            onSizeChange={({ height }) => {
                    this.setState({
                        chatInputHeight: height,
                    })
                }}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create(style2pt({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  messageList: {
    flex: 1,
  },
}))
export default Chat
