import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'
import dineInIcon from '../../assets/dineIn.png';

const CovidRules = ({ requirements, iconOnly }) => {
    let mask = false;
    let sanitizer = false;
    let dineIn = false;
    let social = false;

    requirements.forEach(req => {
        switch (req) {
            case 'mask':
                mask = true;
            case 'sanitizer':
                sanitizer = true;
            case 'dineIn':
                dineIn = true;
            case 'social':
                social = true;
        }
    })

    const pill = (type, icon) => (
        <View style={!!iconOnly ? styles.icon : styles.pill}>
            <Image source={icon} style={[styles.iconImage, !iconOnly ? styles.textIcon : null]}/>
            {!iconOnly ? <Text style={styles.iconText}>{type}</Text> : null }
        </View>
    )

    return (
        <View style={styles.covidRules}>
            {!!mask ? pill('Masks Mandatory', dineInIcon) : null}
            {!!dineIn ? pill('Dine-In', dineInIcon) : null}
            {!!sanitizer ? pill('Hand Sanitizer', dineInIcon) : null}
            {!!social ? pill('Crowd Limit', dineInIcon) : null}
        </View>
    )
}

export default CovidRules;