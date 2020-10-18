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
    details: {
        marginTop: 40,
    },
    storeName: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.textBlack,
        marginBottom: 10,
    },
    storeDetails: {
        fontSize: 17,
        color: colors.textGrey,
        marginBottom: 25,
    },
    person: {
        marginBottom: 25,
    },
    personText: {
        fontWeight: '600',
        fontSize: 17,
        marginBottom: 5,
    },
    personMax: {
        fontSize: 13,
        marginBottom: 25,
    },
    time: {},
    timeText: {
        fontWeight: '600',
        fontSize: 17,
        marginBottom: 5,
    },
    timeMax: {
        fontSize: 13,
        marginBottom: 25,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 'auto',
    }
})
