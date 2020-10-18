import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 45,
        backgroundColor: colors.qvidBlack,
    },
    topContainer: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 25,
        paddingLeft: 28,
        paddingRight: 28,
        position: 'relative',
    },
    bottomContainer: {
        backgroundColor: colors.qvidGrey,
        width: '100%',
        flex:1,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 28,
        paddingRight: 28,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    formContainer: {
        backgroundColor: colors.qvidGrey,
        height: '100%',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 25,
        paddingLeft: 28,
        paddingRight: 28,
    },
    wave: {
        width: '100%',
        position: 'absolute',
        top: 125,
        left: 0,
    },
    logo: {
        position: 'absolute',
        top: 50,
        left: 12,
        justifyContent: 'center',
        paddingLeft: 100,
        width: 45, 
        height: 30,
        resizeMode: 'contain'
    },
    homeContainer: {
        justifyContent: 'flex-start',
        position: 'absolute',
        borderRadius: 35 ,
        top: 250,
        padding: 25,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        bottom: 0
    },
    heading: {
        marginTop: 150,
        zIndex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    flatList: {
        overflow: 'visible',
    },
    searchBarContainer: {
        marginBottom: 25,
    },
    separator: {
        marginTop: 20,
    }
})

