import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './styles'

const DefaultButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.defaultButton}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default DefaultButton;