import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { FlatList, Text, View, SafeAreaView, Button } from 'react-native'
import QueueCard from '../../components/QueueCard';
import styles from './styles'
import { auth, firestore } from '../../firebase/config'

const stores = [
    {
        uid: '1',
        store: 'Starbucks Reserve',
        address: '1124 Pike St, Seattle',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
        distance: '1.2 km',
        requirements: [
            'mask',
            'dineIn',
            'sanitizer',
            'social'
        ],
        timeSlot: moment(),
        person: 2,
        interval: 30
    },
    {
        uid: '2',
        store: 'Starbucks Reserve',
        address: '1124 Pike St, Seattle',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
        distance: '1.2 km',
        requirements: [
            'mask',
            'dineIn',
            'sanitizer',
            'social'
        ],
        timeSlot: moment(),
        person: 2,
        interval: 60
    },
    {
        uid: '3',
        store: 'Starbucks Reserve',
        address: '1124 Pike St, Seattle',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
        distance: '1.2 km',
        requirements: [
            'mask',
            'dineIn',
            'sanitizer',
            'social'
        ],
        timeSlot: moment(),
        person: 2,
        interval: 60
    },
]

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
                tempBooking.push(doc.data());
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
            <View style={styles.formContainer}>
                <FlatList
                    style={styles.flatList}
                    data={bookingDetails}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    keyExtractor={item => item.uid}
                />
            </View>
        </View>
    )
}

export default MyQueue;