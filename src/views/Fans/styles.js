import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default StyleSheet.create(style2pt({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fans: {
    flex: 1,
  },
  fanItem: {
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
  fanCon: {
    flex: 1,
    position: 'relative',
  },
  fanTitle: {
    color: '#333',
    fontSize: 28,
  },
  fanDesc: {
    color: '#666',
    fontSize: 24,
    marginTop: 10,
  },
  time: {
    color: '#666',
    fontSize: 24,
    position: 'absolute',
    right: 0,
    top: 0,
  },
}))
