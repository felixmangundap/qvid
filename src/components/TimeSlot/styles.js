import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export default StyleSheet.create({
    timeSlotPicker: {
        width: '100%',
    },
    datePicker: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateText: {
        alignItems: 'center',
    },
    disabled: {
        borderColor: '#D7F4ED',
    },
    day: {
        fontWeight: '600',
        fontSize: 17,
        color: colors.textBlack,
        marginBottom: 2,
    },
    date: {
        fontSize: 13,
        color: colors.textBlack,
    },
    availableSlot: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 25,
    },
    timePill: {
        width: 90,
        borderWidth: 1,
        borderColor: colors.qvidGreen,
        backgroundColor: colors.qvidWhite,

        alignItems: 'center',
        justifyContent: 'center',
        
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        marginVertical: 5,
        borderRadius: 30,
    },
    active: {
        backgroundColor: colors.qvidGreen,
    },    
    timePillText: {
        color: colors.qvidGreen,
    },
    activeText: {
        color: colors.textWhite,
    },
})
