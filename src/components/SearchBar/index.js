import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

const CustomSearchBar = ({ onChangeText, onClear, placeHolder, value }) => {
    return (
        <TextInput
            style={styles.inputContainer}
            placeholder={placeHolder}
            placeholderTextColor="#aaa"
            onChangeText={onChangeText}
            value={value}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
    )
}

export default CustomSearchBar;