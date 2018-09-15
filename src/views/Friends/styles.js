import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default StyleSheet.create(style2pt({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  friends: {
    flex: 1,
  },
  friendItem: {
    height: 116,
    borderBottomColor: Color.Border,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  imageWrap: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  friendTitle: {
    color: Color.Title,
    fontSize: 28,
  },
}))
