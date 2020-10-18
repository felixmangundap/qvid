import React from 'react'
import { Text, View, SafeAreaView, Button, Image } from 'react-native'
import { signout } from '../../firebase/auth';
import SearchCard from '../../components/SearchCard';
import moment from 'moment';
import styles from './styles';

const Home = (props) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/whitelogo.png')}
            />
            <View style={styles.heading}>
                <Text style={{color: 'white'}}>Seattle, WA</Text>
                <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>96,837 Cases</Text>
                <Text style={{color: 'white'}}>+610 Today</Text>
            </View>
            <View style={styles.wave}>
                <Image
                    style={{width: '100%', height:300, resizeMode: 'contain'}}
                    source={require('../../assets/greenwave.png')}
                />
            </View>
            <View style={styles.homeContainer}>
                <Text style={styles.title}>Today's Queues</Text>
                <SearchCard
                store='Starbucks Not Reserve'
                address='1124 Pike St, Seattle'
                image='https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg'
                open='Open'
                distance='1.2km'
                requirements={ [
                    'mask',
                    'dineIn',
                    'sanitizer',
                    'social'
                ]}
                // onPress={() => navigation.navigate('StoreDetails', { item })}
            />
            </View>
            {/* <Button onPress={() => signout()} title="Logout" color="#841584"/> */}
        </SafeAreaView>
    )
}

export default Home;