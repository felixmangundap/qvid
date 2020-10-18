import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import PageHeader from '../../components/PageHeader';
import CovidRules from '../../components/CovidRules';
import styles from './styles';
import DefaultButton from '../../components/DefaultButton';

const StoreDetails = ({ route, navigation }) => {
    const { item } = route.params;
    const {
        store,
        address,
        image,
        open,
        distance,
        requirements,
    } = item;

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <PageHeader onBack={() => navigation.goBack()} page={'Details'} theme={'dark'}/>
                <View style={styles.details}>
                    <Image source={{uri: image}} style={styles.logo}/>
                    <Text style={styles.storeName}>{store}</Text>
                    <Text style={styles.storeAddress}>{address}</Text>
                    <Text style={styles.storeDetails}>{open} ∙ {distance}</Text>
                    <CovidRules requirements={requirements} />
                </View>
                <View style={styles.buttonContainer}>
                    <DefaultButton title={'Book A Queue'} onPress={() => navigation.navigate('StoreBooking', { item })}/>
                </View>
            </View>
        </View>
    )
}

export default StoreDetails;