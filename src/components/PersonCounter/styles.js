import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    counter: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.qvidGreen,
        borderWidth: 1,
        borderRadius: 30,
    },
    disabled: {
        borderColor: '#D7F4ED',
    },
    person: {
        fontWeight: '600',
        fontSize: 24,
        color: colors.qvidGreen,
        marginHorizontal: 40,
    }
})
