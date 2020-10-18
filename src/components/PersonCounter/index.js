import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather';

import colors from '../../utils/colors';
import styles from './styles'

const PersonCounter = ({ value, setPerson }) => {
    return (
        <View style={styles.counter}>
            <TouchableOpacity
                onPress={() => setPerson(value - 1)}
                style={[styles.button, value === 1 ? styles.disabled : null]}
                disabled={value === 1}
            >
                <Icon name={'minus'} size={34} color={value === 1 ? '#D7F4ED' : colors.qvidGreen} />
            </TouchableOpacity>
            <Text style={styles.person}>{ value }</Text>
            <TouchableOpacity
                onPress={() => setPerson(value + 1)}
                style={[styles.button, value === 5 ? styles.disabled : null]}
                disabled={value === 5}
            >
                <Icon name={'plus'} size={34} color={value === 5 ? '#D7F4ED' : colors.qvidGreen} />
            </TouchableOpacity>
        </View>
    )
}

export default PersonCounter;