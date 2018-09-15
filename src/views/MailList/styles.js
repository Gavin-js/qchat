import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default StyleSheet.create(style2pt({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    height: 90,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: Color.Border,
    borderBottomWidth: 1,
  },
  tabItem: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
}))
