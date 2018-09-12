import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default StyleSheet.create(
  style2pt({
    modal: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    header: {
      flexGrow: 1,
      height: 76,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#F8F8F8',
    },
    headerItem: {
      height: 76,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionText: {
      fontSize: 28,
    },
    okText: {
      color: Color.Title,
    },
    dismissText: {
      color: Color.Desc,
    },
    title: {
      color: Color.Text,
      fontSize: 28,
      textAlign: 'center',
    },
  })
)
