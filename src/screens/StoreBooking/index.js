import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'

import PageHeader from '../../components/PageHeader';
import CovidRules from '../../components/CovidRules';
import styles from './styles';
import DefaultButton from '../../components/DefaultButton';
import PersonCounter from '../../components/PersonCounter';

const StoreBooking = ({ route, navigation }) => {
    const [person, setPerson] = useState(1);
    const [timeSlot, setTimeSlot] = useState(null);

    const { item } = route.params;
    const {
        uid,
        store,
        address,
        image,
        interval,
        limit,
        timeOpen,
        timeClose,
        open,
    } = item;

    const confirmBooking = () => {
        console.log(moment(timeOpen).add(60, 'm').format('h:mmA'));
        console.log(moment(timeClose).format('dddd, MMMM Do YYYY, h:mmA'));
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <PageHeader onBack={() => navigation.goBack()} page={'Book A Queue'} theme={'dark'}/>
                <View style={styles.details}>
                    <Image style={styles.logo}/>
                    <Text style={styles.storeName}>{store}</Text>
                    <Text style={styles.storeDetails}>{address} ∙ {open}</Text>
                </View>
                <View style={styles.person}>
                    <Text style={styles.personText}>Number of Person</Text>
                    <Text style={styles.personMax}>Maximum of 5</Text>
                    <PersonCounter value={person} setPerson={setPerson} />
                </View>
                <View style={styles.time}>
                    <Text style={styles.timeText}>Pick a Time Slot</Text>
                    <Text style={styles.timeMax}>Limit of {interval} Per Visit</Text>
                    {/* <TimeSlot
                        interval={interval}
                        timeOpen={timeOpen}
                        timeClose={timeClose}
                        timeSlot={timeSlot}
                        setTimeSlot={setTimeSlot}
                    /> */}
                </View>
                <View style={styles.buttonContainer}>
                    <DefaultButton title={'Confirm'} onPress={confirmBooking}/>
                </View>
            </View>
        </View>
    )
}

export default StoreBooking;