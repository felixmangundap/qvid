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
    },
    searchBarContainer: {
        marginBottom: 25,
    },
    separator: {
        marginTop: 20,
    }
})

