import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, Image, ScrollView } from 'react-native'
import QueueCard from '../../components/QueueCard';
import styles from './styles'
import { auth, firestore } from '../../firebase/config'

const MyQueue = ({ navigation }) => {
    const [bookings, setBookings] = useState([]);
    const [bookingDetails, setBookingDetails] = useState([])

    useEffect(() => {
        const tempBooking = [];
        firestore().collection('queues')
        .where('userId', '==', auth().currentUser.uid)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(function(doc) {
                tempBooking.push({uid: doc.id, ...doc.data()});
            })

            setBookings(tempBooking);
        })
    }, [])

    useEffect(() => {
        const tempDetails = [];
        bookings.forEach(obj => {
            firestore().collection('stores')
            .doc(obj.storeId)
            .get()
            .then(document => {
                const newObj = {
                    ...obj,
                    ...document.data()
                }
                tempDetails.push(newObj);

                setBookingDetails(tempDetails);
            })
        })
    }, [bookings])

    const renderItem = ({ item }) => {
        const {
            uid,
            store, 
            address,
            image,
            requirements,
            timeSlot,
            person,
            interval
        } = item;

        return (
            <QueueCard
                store={store}
                address={address}
                image={image}
                person={person}
                timeSlot={timeSlot}
                requirements={requirements}
                interval={interval}
                onPress={() => navigation.navigate('BookingDetails', { item })}
            />
        )
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.wave}>
                <Image
                    style={{width: '100%', height:300, resizeMode: 'contain'}}
                    source={require('../../assets/greenwave.png')}
                />
            </View>
            <View style={styles.topContainer}>
                <StatusBar style="light" />
                <Image
                    style={styles.logo}
                    source={require('../../assets/whitelogo.png')}
                />
                <View style={styles.heading}>
                    <Text style={{color: 'white', fontSize: 34, fontWeight: 'bold'}}>My Queues</Text>
                    <Text style={{color: 'white', fontSize: 17}}>You have {bookings.length} upcoming queues today.</Text>
                </View>
            </View>
            <ScrollView style={styles.bottomContainer}>
                <FlatList
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 50}}
                    style={styles.flatList}
                    data={bookingDetails}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    keyExtractor={item => item.uid}
                />
            </ScrollView>
        </View>
    )
}

export default MyQueue;