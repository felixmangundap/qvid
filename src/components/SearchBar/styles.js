import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    inputContainer: {
        height: 48,
        paddingLeft: 16,
        borderRadius: 10,
        backgroundColor: colors.qvidWhite,

        shadowOffset: {  width: 4,  height: 4  },
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 50,
    }
})
