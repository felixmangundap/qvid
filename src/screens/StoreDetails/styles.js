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
    logo: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 30,
    },
    storeName: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.textBlack,
        marginBottom: 10,
    },
    storeAddress: {
        fontSize: 17,
        color: colors.textGrey,
        marginBottom: 10,
    },
    storeDetails: {
        fontSize: 17,
        color: colors.textGrey,
        marginBottom: 10,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 'auto',
    }
})
