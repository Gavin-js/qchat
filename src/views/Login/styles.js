import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default StyleSheet.create(
  style2pt({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      paddingTop: 168,
      paddingLeft: 50,
      paddingRight: 50,
    },
    titleWapper: {
      borderLeftWidth: 12,
      borderLeftColor: Color.Primary,
    },
    title: {
      fontSize: 40,
      color: Color.Title,
      fontWeight: 'bold',
      paddingLeft: 20,
    },
    textFieldWarpper: {
      marginTop: 60,
    },
    contentWarpper: {
      marginTop: 98,
    },
    bottomLinkWarp: {
      marginTop: 70,
      width: '100%',
      alignItems: 'center',
    },
    bottomLink: {
      color: Color.Link,
      fontSize: 28,
    },
  })
)
