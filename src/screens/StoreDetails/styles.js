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
    },
    details: {
        marginTop: 40,
        paddingLeft: 28,
        paddingRight: 28,
    },
    moreDetails: {
        marginTop: 40,
    },
    sendIcon: {
        paddingLeft: 28,
        paddingRight: 28,
        position: "absolute",
        padding: 20
    },
    callIcon: {
        paddingLeft: 28,
        paddingRight: 28,
        position: "absolute",
        padding: 20
    }, 
    calendarIcon: {
        paddingLeft: 28,
        paddingRight: 28,
        position: "absolute",
        padding: 20
    },
    getDirection: {
        position: "absolute",
        padding: 18,
        width: '100%',
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.qvidGreen,
        textAlign: "right",
        paddingRight: 28,
    },
    call: {
        position: "absolute",
        padding: 18,
        width: '100%',
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.qvidGreen,
        textAlign: "right",
        paddingRight: 28,
    },
    storeDirection: {
        borderTopWidth: 1,
        padding: 18,
        width: '100%',
        borderColor: '#ddd',
        fontSize: 15,
        color: colors.textGrey,
        paddingLeft: 60,
        paddingRight: 28,
    }, 
    storePhone: {
        borderTopWidth: 1,
        padding: 18,
        width: '100%',
        borderColor: '#ddd',
        fontSize: 15,
        color: colors.textGrey,
        paddingLeft: 60,
        paddingRight: 28,
    },
    storeSlot: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 18,
        width: '100%',
        borderColor: '#ddd',
        fontSize: 15,
        color: colors.textGrey,
        paddingLeft: 60,
        paddingRight: 28,
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
        paddingLeft: 28,
        paddingRight: 28,
    }
})
