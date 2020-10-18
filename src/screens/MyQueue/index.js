import React, { useState } from 'react'
import moment from 'moment'
import { FlatList, Text, View, SafeAreaView, Button } from 'react-native'
import QueueCard from '../../components/QueueCard';
import styles from './styles'

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
    const renderItem = ({ item }) => {
        const {
            uid,
            store, 
            address,
            image,
            distance,
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
                distance={distance}
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
                    data={stores}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    keyExtractor={item => item.uid}
                />
            </View>
        </View>
    )
}

export default MyQueue;