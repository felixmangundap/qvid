import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

const SearchCard = ({ store, address, image, open, distance, requirements, onPress }) => {
    const renderIcons = () => requirements.map(req => <Text>{req}</Text>);

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
                    {renderIcons()}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SearchCard;