import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 45,
        backgroundColor: colors.qvidGrey,
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
    flatList: {
        overflow: 'visible',
        flex: 1,
        zIndex: -1,
    },
    searchBarContainer: {
        marginBottom: 25,
        zIndex: 1,
    },
    separator: {
        marginTop: 20,
    },
    emptySearch: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 15,
        color: colors.qvidDarkGrey,
        width: '60%',
        marginTop: 15,
    }
})
