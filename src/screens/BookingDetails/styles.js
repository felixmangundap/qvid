import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 45,
        backgroundColor: colors.qvidBlack,
    },
    formContainer: {
        backgroundColor: colors.qvidBlack,
        height: '100%',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 25,
        paddingLeft: 28,
        paddingRight: 28,
    },
    ticketContainer: {
      marginTop: 30,
      backgroundColor: colors.qvidWhite,
      width: '100%',
      borderRadius: 10,
      padding: 10
    },
    barcodeContainer: {
      marginVertical: 25,
      backgroundColor: colors.qvidGreen,
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',

    },
    details: {
        marginTop: 15,
    },
    logo: {
      alignSelf:"center",
        width: 70,
        height: 70,
        borderRadius: 10,
        marginBottom: 30,
    },
    storeName: {
      alignSelf:"center",
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.textBlack,
        marginBottom: 10,
    },
    address: {
      alignSelf: "center",
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10
    },
    storeAddress: {
      marginLeft: 5,
      fontSize: 15,
      color: colors.textGrey,
    },
    time: {
      alignSelf: "center",
      flexDirection: "row",
      alignItems: 'center',
      marginBottom: 10
    },
    storeTime: {
      marginLeft: 10,
      fontSize: 17,
      color: colors.qvidBlack,
    },
    requirementCard: {
      alignSelf: "center",
    },
    storeDetails: {
        fontSize: 17,
        color: colors.textGrey,
        marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
        width: '100%',
        marginTop: 'auto',
    }
})
