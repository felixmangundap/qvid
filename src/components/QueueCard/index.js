import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import CovidRules from '../CovidRules';
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors';
import moment from 'moment';
const QueueCard = ({ store, address, image, interval, requirements, timeSlot, person, onPress }) => {


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
                        <View style={styles.address}>
                        <Icon name={'map-pin'} size={15} color={colors.textBlack} />
                        <Text style={styles.addressText}>{address}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.date}>
                  <Icon name={'calendar'} size={20} color={colors.textBlack} />
                  <Text style={styles.dateText}>{moment(timeSlot).format('MMM Do YY')} ∙ {moment(timeSlot).format('h:mm A')} - {moment(timeSlot).add(interval, 'm').format('h:mm A')}</Text>
                </View>
                <View style={styles.person}>
                  <Icon name={'user'} size={20} color={colors.textBlack} />
                  <Text style={styles.personText}>{person}</Text>
                </View>
                <View style={styles.prereq}>
                    <CovidRules requirements={requirements} iconOnly/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default QueueCard;