import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import CovidRules from '../CovidRules';
import styles from './styles'

const SearchCard = ({ store, address, image, open, distance, requirements, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.top}>
                    <Image source={image} style={styles.logo}/>
                    <View>
                        <Text
                            numberOfLines={1}
                            style={styles.storeName}
                            ellipsizeMode={'tail'}
                        >
                            {store}
                        </Text>
                        <Text style={styles.address}>{address}</Text>
                    </View>
                </View>
                <Text style={styles.status}>{open} ∙ {distance}</Text>
                <View style={styles.prereq}>
                    <CovidRules requirements={requirements} iconOnly/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SearchCard;