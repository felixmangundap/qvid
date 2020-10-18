import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import PageHeader from '../../components/PageHeader';
import CovidRules from '../../components/CovidRules';
import styles from './styles';
import DefaultButton from '../../components/DefaultButton';
import colors from '../../utils/colors'

const StoreDetails = ({ route, navigation }) => {
    const { item } = route.params;
    const {
        store,
        address,
        image,
        open,
        distance,
        requirements,
        limit
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
                <View style={styles.moreDetails}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon style={styles.sendIcon} name={'send'} size={20} color={"#ddd"} />
                        <Text style={styles.storeDirection}>{address}</Text>
                        <Text style={styles.getDirection}>Get Directions</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon style={styles.callIcon} name={'phone'} size={20} color={"#ddd"} />
                        <Text style={styles.storePhone}>+1 416-763-7325</Text>
                        <Text style={styles.getDirection}>Call</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon style={styles.calendarIcon} name={'calendar'} size={20} color={"#ddd"} />
                        <Text style={styles.storeSlot}>{limit} Slots Available Right Now</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <DefaultButton title={'Book A Queue'} onPress={() => navigation.navigate('StoreBooking', { item })}/>
                </View>
            </View>
        </View>
    )
}

export default StoreDetails;