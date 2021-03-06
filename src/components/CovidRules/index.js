import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'
import dineInIcon from '../../assets/spoon.png';
import maskIcon from '../../assets/mask.png';
import crowdIcon from '../../assets/crowd.png';
import sanitizerIcon from '../../assets/sanitizer.png';

const CovidRules = ({ requirements, isCenter, iconOnly }) => {
    const [mask, setMask] = useState(false);
    const [sanitizer, setSanitizer] = useState(false);
    const [dineIn, setDineIn] = useState(false);
    const [social, setSocial] = useState(false);

    useEffect(() => {
        requirements.forEach(req => {
            if (req === 'mask') setMask(true);
            else if (req === 'sanitizer') setSanitizer(true);
            else if (req === 'dineIn') setDineIn(true);
            else if (req === 'social') setSocial(true);
        })
    }, [])

    const pill = (type, icon) => (
        <View style={[!!iconOnly ? styles.icon : styles.pill, !!isCenter ? styles.center : null]}>
            <Image source={icon} style={[styles.iconImage, !iconOnly ? styles.textIcon : null]}/>
            {!iconOnly ? <Text style={styles.iconText}>{type}</Text> : null }
        </View>
    )

    return (
        <View style={styles.covidRules}>
            {mask ? pill('Masks Mandatory', maskIcon) : null}
            {dineIn ? pill('Dine-In', dineInIcon) : null}
            {sanitizer ? pill('Hand Sanitizer', sanitizerIcon) : null}
            {social ? pill('Crowd Limit', crowdIcon) : null}
        </View>
    )
}

export default CovidRules;