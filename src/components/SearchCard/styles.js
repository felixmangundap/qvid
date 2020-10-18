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
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    logo: {
        width: 50,
        height: 50,
        backgroundColor: colors.qvidGreen,
        borderRadius: 10,
        marginRight: 25,
    },
    storeName: {
        fontWeight: 'bold',
        fontSize: 17,
        color: colors.textBlack,
        marginBottom: 5,
    },
    address: {
        fontSize: 13,
        color: colors.textGrey,
    },
    status: {
        color: colors.textGrey,
        fontSize: 15,
    },
    prereq: {
        marginTop: 15,
        flexDirection: 'row',
    },
    icons: {
        marginRight: 10,
        height: 30,
        width: 30,
    }
})
