import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'
import styles from '../Login/styles'

export default {
  ...styles,
  ...StyleSheet.create(
    style2pt({
      container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 168,
        paddingLeft: 50,
        paddingRight: 50,
      },
      registerView: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 25,
      },
      registerRule: {
        color: Color.Desc,
        textDecorationStyle: 'solid',
        fontSize: 24,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 5,
        paddingBottom: 5,
        textDecorationColor: Color.Desc,
        textDecorationLine: 'underline',
      },
      registerText: {
        color: Color.Desc,
        fontSize: 24,
        paddingTop: 5,
        paddingBottom: 5,
      },
    })
  ),
}
