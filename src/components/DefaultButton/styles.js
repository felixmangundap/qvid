import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    defaultButton: {
        width: '100%',
        padding: 12,
        borderRadius: 8,
        backgroundColor: colors.qvidGreen,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: colors.textWhite,
        fontWeight: 'bold',
        fontSize: 17,
    },
})
