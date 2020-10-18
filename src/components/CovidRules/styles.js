import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    covidRules: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: colors.qvidGreen,
        marginRight: 10,
    },
    pill: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        paddingHorizontal: 12,
        marginRight: 10,
        marginBottom: 8,
        borderRadius: 20,
        backgroundColor: colors.qvidGreen,
        overflow: "visible",

        shadowOffset: {  width: 0,  height: 3  },
        shadowColor: '#7b7b7b',
        shadowOpacity: 0.15,
        shadowRadius: 12,
    },
    iconImage: {
        height: 20,
        width: 20,
    },
    iconText: {
        fontWeight: 'bold',
        fontSize: 13,
        color: colors.textWhite,
    },
    textIcon: {
        marginRight: 10,
    }
})
