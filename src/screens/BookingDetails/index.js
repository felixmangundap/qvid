import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import PageHeader from '../../components/PageHeader';
import CovidRules from '../../components/CovidRules';
import styles from './styles';
import DefaultButton from '../../components/DefaultButton';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors'
import moment from 'moment'

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
                <PageHeader onBack={() => navigation.goBack()} page={'My Ticket'} theme={'dark'}/>
                <View style={styles.ticketContainer}>
                <View style={styles.details}>
                    <Image source={{uri: image}} style={styles.logo}/>
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
                    <CovidRules requirements={requirements} />
                    <View style={styles.barcodeContainer}>
                    {/* <QRCode 
                    value={uid}
                    size={200}
                    bgColor='black'
                    fgColor='white'
                    /> */}
                    </View>
                    </View>
                </View>
                </View>
                <View style={styles.buttonContainer}>
                  <DefaultButton title={'Edit'} onPress={() => console.log("edit button pressed")}/>
                  <DefaultButton title={'Cancel'} onPress={() => console.log("cancel button pressed")}/>
                </View>
            </View>
        </View>
    )
}

export default BookingDetails;