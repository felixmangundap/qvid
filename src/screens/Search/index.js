import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, SafeAreaView, Image } from 'react-native'
import moment from 'moment';

import { signout } from '../../firebase/auth';
import { firestore } from '../../firebase/config';
import CustomSearchBar from '../../components/SearchBar';
import SearchCard from '../../components/SearchCard';
import styles from './styles'
import emptySearch from '../../assets/emptySearch.png';

const stores = [
    {
        uid: '1',
        store: 'Starbucks Reserve',
        address: '1124 Pike St, Seattle',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
        limit: 30,
        timeOpen: moment().hour(8).minute(0).second(0),
        timeClose: moment().hour(17).minute(0).second(0),
        interval: 60,
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
        interval: 60,
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
        interval: 60,
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
        interval: 60,
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
    const [searchResult, setSearchResult] = useState('');

    useEffect(() => {
        const searchTerm = search.replace(/[^0-9a-zA-Z]+/g, '').toLowerCase();
        const storeRef = firestore().collection('stores');
        storeRef
            .where('search', '==',  searchTerm )
            .get()
            .then(function (querySnapshot) {
                let storeList = [];
                querySnapshot.forEach(function (doc) {
                    storeList.push({uid: doc.id, ...doc.data()});
                });
                setSearchResult(storeList);
            })
            .catch((error) => {
                setLoading(false)
            });
    }, [search])

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
                    showsVerticalScrollIndicator={false}
                    style={styles.flatList}
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={searchResult}
                    renderItem={renderItem}
                    ListEmptyComponent={() => (
                        <View style={styles.emptySearch}>
                            <Image source={emptySearch} />
                            <Text style={styles.emptyText}>Search for places that you want to queue in.</Text>
                        </View>
                    )}
                    ListHeaderComponentStyle={styles.searchBarContainer}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    keyExtractor={item => item.uid}
                />
            </View>
        </View>
    )
}

export default Search;