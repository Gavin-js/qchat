import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default StyleSheet.create(style2pt({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  tabBar: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: Color.Border,
    borderBottomWidth: 1,
  },
  tabItem: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  textField: {
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#fff',
  },
  findWrap: {
    marginTop: 20,
    backgroundColor: '#fff',
  },
  findItem: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomColor: Color.Line,
    borderBottomWidth: 0.5,
  },
  findItemText: {
    marginLeft: 20,
    color: Color.Title,
    fontSize: 26,
  },
  phoneIcon: {
    height: 60,
    width: 60,
    borderRadius: 120,
    backgroundColor: '#ff6889',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanIcon: {
    height: 60,
    width: 60,
    borderRadius: 120,
    backgroundColor: '#ffcd3c',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
