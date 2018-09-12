import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { style2pt, Color } from '../../utils/index'
import Ripple from '../Ripple'
import { navigate } from '../../utils/navigate'

class ListItem extends PureComponent {
  render() {
    const { style, link, onPress, title, afterText, lastChild } = this.props
    const beforeText = this.props.beforeText || title
    return (
      <Ripple
        style={[
          styles.listItemRipple,
          lastChild ? styles.listItemRippleLast : null,
          style,
        ]}
        border={false}
        onPress={() => {
          if (onPress) {
            onPress()
          } else if (link) {
            navigate(link)
          }
        }}
      >
        <View style={styles.listItem}>
          <View style={[styles.listItemContent]}>
            <View style={styles.listItemBefore}>
              <Text style={styles.listItemBeforeText}>{beforeText}</Text>
            </View>
            <View style={styles.listItemAfter}>
              <Text style={styles.listItemAfterText}>{afterText}</Text>
              {link ? (
                <Image
                  style={styles.listItemArrow}
                  source={require('../../assets/arrow_gray_small_2.png')}
                />
              ) : null}
            </View>
          </View>
        </View>
      </Ripple>
    )
  }
}

class ListBlock extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <View style={styles.container}>
        {list.map((item, index) => (
          <ListItem
            lastChild={index == list.length - 1}
            key={index}
            {...item}
          />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create(
  style2pt({
    container: {
      backgroundColor: Color.White,
    },
    listItemRipple: {
      height: 96,
      backgroundColor: Color.White,
      borderBottomColor: Color.Line,
      borderBottomWidth: 0.5,
      paddingLeft: 15,
      paddingRight: 15,
    },
    listItemRippleLast: {
      borderBottomWidth: 0,
    },
    listItem: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
    },
    listItemContent: {
      flex: 1,
      height: 96,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listItemAfter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    listItemAfterText: {
      fontSize: 28,
      color: Color.Desc,
    },
    listItemArrow: {
      width: 16,
      height: 26,
      marginLeft: 10,
    },
    listItemBefore: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    listItemBeforeText: {
      fontSize: 30,
      color: Color.Title,
    },
  })
)

ListBlock.Item = ListItem

export default ListBlock
