import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default StyleSheet.create(style2pt({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  article: {
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingRight: 30,
  },
  postTitle: {
    fontSize: 32,
    color: Color.Title,
  },
  postDesc: {
    fontSize: 26,
    color: Color.Text,
    marginTop: 15,
    lineHeight: 35,
  },
  user: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 28,
    color: Color.Text,
  },
  postTime: {
    fontSize: 24,
    color: Color.Desc,
  },
  postImage: {
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  optionItem: {
    width: 200,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.Line,
    borderWidth: 1,
    borderRadius: 60,
    margin: 10,
  },
  optionText: {
    marginLeft: 15,
    fontSize: 24,
    color: Color.Desc,
  },
  comments: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  commentNavbar: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Color.Line,
    borderBottomWidth: 0.5,
  },
  commentNavbarItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentNavbarText: {
    marginRight: 15,
    fontSize: 26,
    color: Color.Title,
  },
  commentUser: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentAvatar: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
  commentUserInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentUserName: {
    fontSize: 28,
    color: Color.Primary,
  },
  commentPostTime: {
    fontSize: 24,
    color: Color.Desc,
  },
  commentUserZan: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentUserZanText: {
    fontSize: 24,
    color: Color.Desc,
    marginLeft: 10,
  },
  commentCon: {
    marginLeft: 90,
    borderBottomColor: Color.Line,
    borderBottomWidth: 1,
  },
  commentText: {
    color: Color.Title,
    fontSize: 28,
    marginTop: 10,
  },
  reply: {
    backgroundColor: Color.Background,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 25,
    marginBottom: 25,
    paddingBottom: 15,
  },
  replayItem: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  replyUser: {
    color: Color.Primary,
  },
  replyMore: {
    color: Color.Primary,
    marginRight: 10,
    fontSize: 24,
  },
  replyText: {
    color: Color.Text,
  },
  fixedBottom: {
    borderTopColor: Color.Line,
    borderTopWidth: 1,
    height: 88,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  replayInput: {
    flex: 1,
  },
  fixedButtonWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fixedButton: {
    marginLeft: 30,
  },
}))
