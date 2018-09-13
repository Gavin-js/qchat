import { StyleSheet } from 'react-native'
import { style2pt, Color } from '../../utils/index'

export default StyleSheet.create(style2pt({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    userWrap: {
        width: 750,
        height: 346,
        paddingLeft: 30,
        paddingRight: 30,
    },
    user: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 130,
        marginTop: 80,
    },
    userCon: {
        flex: 1,
    },
    userName: {
        fontSize: 40,
        color: '#333',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderColor: '#fff',
        borderWidth: 5,
        shadowColor: 'rgba(0,0,0,0.90)',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowRadius: 23,
    },
    profileLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    profile: {
        fontSize: 24,
        color: '#666',
        marginRight: 6,
    },
    memo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },
    memoItem: {
        flex: 1,
        alignItems: 'center',
    },
    memoLabel: {
        fontSize: 24,
        color: '#666',
        marginTop: 10,
    },
    memoValue: {
        fontSize: 26,
        color: '#333',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        marginLeft: 30,
        marginRight: 30,
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 0.5,
    },
    listCon: {
        flex: 1,
        marginLeft: 20,
        color: '#333',
    }
}))