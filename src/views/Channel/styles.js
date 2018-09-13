import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default StyleSheet.create(style2pt({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    article: {
        flex: 1,
    },
    articleItem: {
        marginBottom: 20,
        backgroundColor: '#fff',
        paddingLeft: 25,
        paddingRight: 25,
    },
    articleTitle: {
        fontSize: 32,
        color: '#333',
        marginTop: 25,
    },
    articleDesc: {
        fontSize: 26,
        color: '#666',
        marginTop: 15,
    },
    imageWrap: {
        marginTop: 25,
    },
    image: {
        width: 360,
        height: 360,
        borderRadius: 5,
    },
    user: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 24,
        color: '#333',
    },
    time: {
        fontSize: 22,
        color: '#666',
    },
    tagsWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#f8efee',
        borderRadius: 35,
        paddingLeft: 15,
        paddingRight: 15,
    },
    tags: {
        fontSize: 22,
        color: Color.Primary,
        marginLeft: 10,
    },
    options: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        borderTopColor: '#d8d8d8',
        borderTopWidth: 0.5,
    },
    optionItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionText: {
        marginLeft: 15,
        fontSize: 24,
        color: '#999',
    }
}))