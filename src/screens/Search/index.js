import React, { useState } from 'react'
import { FlatList, Text, View, SafeAreaView, Button } from 'react-native'
import moment from 'moment';

import { signout } from '../../firebase/auth';
import CustomSearchBar from '../../components/SearchBar';
import SearchCard from '../../components/SearchCard';
import styles from './styles'

const stores = [
    {
        uid: '1',
        store: 'Starbucks Reserve',
        address: '1124 Pike St, Seattle',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
        limit: 30,
        timeOpen: moment().hour(8).minute(0).second(0),
        timeClose: moment().hour(17).minute(0).second(0),
        interval: 30,
        open: 'Open',
        distance: '1.2 km',
        requirements: [
            'mask',
            'dineIn',
            'sanitizer',
            'social'
        ],
    },
    {
        uid: '2',
        store: 'Starbucks Reserve',
        address: '1124 Pike St, Seattle',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
        limit: 30,
        timeOpen: moment().hour(8),
        timeClose: moment().hour(17),
        interval: 30,
        open: 'Open',
        distance: '1.2 km',
        requirements: [
            'mask',
            'dineIn',
            'sanitizer',
            'social'
        ],
    },
    {
        uid: '3',
        store: 'Starbucks Not Reserve',
        address: '1124 Pike St, Seattle',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
        limit: 30,
        timeOpen: moment().hour(8),
        timeClose: moment().hour(17),
        interval: 30,
        open: 'Open',
        distance: '1.2 km',
        requirements: [
            'mask',
            'dineIn',
            'sanitizer',
            'social'
        ],
    },
    {
        uid: '4',
        store: 'Starbucks Not Reserve',
        address: '1124 Pike St, Seattle',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
        limit: 30,
        timeOpen: moment().hour(8),
        timeClose: moment().hour(17),
        interval: 30,
        open: 'Open',
        distance: '1.2 km',
        requirements: [
            'mask',
            'dineIn',
            'sanitizer',
            'social'
        ],
    },
]

const Search = ({ navigation }) => {
    const [search, setSearch] = useState('');

    const renderItem = ({ item }) => {
        const {
            store,
            address,
            image,
            open,
            distance,
            requirements,
        } = item;

        return (
            <SearchCard
                store={store}
                address={address}
                image={image}
                open={open}
                distance={distance}
                requirements={requirements}
                onPress={() => navigation.navigate('StoreDetails', { item })}
            />
        )
    };

    // const renderSearchBar = () => (
        
    // )

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.searchBarContainer}>
                    <CustomSearchBar
                        placeHolder='Search for places'
                        onChangeText={(text) => setSearch(text)}
                        onClear={() => setSearch('')}
                        value={search}
                    />
                </View>
                <FlatList
                    style={styles.flatList}
                    data={stores}
                    renderItem={renderItem}
                    // ListHeaderComponent={() => 
                    //     <CustomSearchBar
                    //         placeHolder='Search for places'
                    //         onChangeText={(text) => setSearch(text)}
                    //         onClear={() => setSearch('')}
                    //         value={search}
                    //     />
                    // }
                    ListHeaderComponentStyle={styles.searchBarContainer}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    keyExtractor={item => item.uid}
                />
            </View>
        </View>
    )
}

export default Search;