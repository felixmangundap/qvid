import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Image } from 'react-native'

import QueueCard from '../../components/QueueCard';
import { auth, firestore } from '../../firebase/config'
import styles from './styles';

const Home = ({ navigation }) => {
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
                    <Text style={{color: 'white', fontSize: 15}}>Seattle, WA</Text>
                    <Text style={{color: 'white', fontSize: 34, fontWeight: 'bold'}}>96,837 Cases</Text>
                    <Text style={{color: 'white', fontSize: 17}}>+610 Today</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View>
                    <Text style={styles.title}>Today's Queues</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        style={styles.flatList}
                        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
                        data={bookingDetails}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        keyExtractor={item => item.uid}
                    />
                </View>
            </View>
        </View>
    )
}

export default Home;