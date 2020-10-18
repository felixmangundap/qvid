import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather';

import colors from '../../utils/colors';
import styles from './styles'

const PageHeader = ({ onBack, page, theme }) => {
    const headerTheme = theme ? theme : 'light';
    const iconColor = headerTheme === 'dark' ? colors.textBlack : colors.textWhite;
    return (
        <View style={[styles.header, headerTheme === 'dark' ? styles.dark : styles.light]}>
            <TouchableOpacity onPress={onBack}>
                <Icon name={'chevron-left'} size={30} color={iconColor} />
            </TouchableOpacity>
            <Text style={[styles.pageTitle, headerTheme === 'dark' ? styles.dark : styles.light]}>{ page }</Text>
            <View style={styles.hiddenPadding}/>
        </View>
    )
}

export default PageHeader;