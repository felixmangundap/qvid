import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    card: {
        padding: 25,
        backgroundColor: colors.qvidWhite,
        borderRadius: 20,

        shadowOffset: {  width: 4,  height: 4  },
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 50,
    },
    date: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    dateText: {
      marginLeft: 12
    },
    person: {
      marginTop: 6,
      flexDirection: 'row',
      alignItems: 'center'
    },
    personText: {
      marginLeft: 12
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 25,
    },
    storeName: {
        fontWeight: 'bold',
        fontSize: 17,
        color: colors.textBlack,
        marginBottom: 5,
    },
    textContainer: {
      flex: 1
    },
    address: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    addressText: {
        marginLeft: 5,
        fontSize: 13,
        color: colors.textGrey,
    },
    status: {
        color: colors.textGrey,
        fontSize: 15,
    },
    prereq: {
        marginTop: 15,
    },
    icons: {
        marginRight: 10,
        height: 30,
        width: 30,
    }
})
