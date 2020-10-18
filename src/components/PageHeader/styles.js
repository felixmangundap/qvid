import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dark: {
        color: colors.textBlack,
    },
    light: {
        color: colors.textWhite,
    },
    pageTitle: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    hiddenPadding: {
        width: 30,
        height: 30,
    }
})
