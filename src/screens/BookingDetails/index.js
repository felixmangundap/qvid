import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'
import QRCode from 'react-native-qrcode-svg';

import PageHeader from '../../components/PageHeader';
import CovidRules from '../../components/CovidRules';
import styles from './styles';
import DefaultButton from '../../components/DefaultButton';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors'

const base64logo = 'data:image/png;base64,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';

const BookingDetails = ({ route, navigation }) => {
    const { item } = route.params;
    const {
        uid,
        store,
        address,
        timeSlot,
        person,
        image,
        interval,
        requirements,
    } = item;

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <PageHeader onBack={() => navigation.goBack()} page={'My Ticket'} theme={'light'}/>
                <View style={styles.ticketContainer}>
                    <View style={styles.details}>
                        <Image style={styles.logo}/>
                        <Text style={styles.storeName}>{store}</Text>
                        <View style={styles.address}>
                            <Icon name={'map-pin'} size={15} color={colors.textGrey} />
                            <Text style={styles.storeAddress}>{address}</Text>
                        </View>
                        <View style={styles.time}>
                        <Icon name={'calendar'} size={15} color={colors.textBlack} />
                            <Text style={styles.storeTime}>{moment(timeSlot).format('MMM Do YY')}</Text>
                        </View>
                        <View style={styles.time}>
                        <Icon name={'clock'} size={15} color={colors.textBlack} />
                            <Text style={styles.storeTime}>{moment(timeSlot).format('h:mm A')} - {moment(timeSlot).add(interval, 'm').format('h:mm A')}</Text>
                        </View>
                        <View style={styles.time}>
                        <Icon name={'user'} size={15} color={colors.textBlack} />
                        <Text style={styles.storeTime}>{person}</Text>
                        </View>
                        <View style={styles.requirementCard}>
                        <CovidRules requirements={requirements} iconOnly />
                        <View style={styles.barcodeContainer}>
                            <QRCode
                                size={175}
                                value={uid}
                                color={colors.qvidGreen}
                                logo={{uri: base64logo}}
                                logoBackgroundColor={colors.qvidGreen}
                            />
                        </View>
                    </View>
                </View>
                </View>
            </View>
        </View>
    )
}

export default BookingDetails;