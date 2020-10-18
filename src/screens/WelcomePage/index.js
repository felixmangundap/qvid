import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import styles from './styles';

const WelcomePage = ({navigation}) => {


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, height: '100%', width:'100%'}} ContentContainerStyle={{flexGrow: 1,
                    justifyContent: 'center'}}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/whitelogoicon.png')}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Book your visit.</Text>
                    <Text style={styles.title}>Break the circuit.</Text>
                    <Text style={styles.subtitle}>Stay postitive and test negative.</Text>
                </View>
                <Image
                    style={styles.phone}
                    source={require('../../assets/phone.png')}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignUpChoice')}>
                    <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonWhite}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonTitleGreen}>Log In</Text>
                </TouchableOpacity>
                <View style={styles.wave}>
                    <Image
                        style={{width: '100%', height:300, resizeMode: 'contain'}}
                        source={require('../../assets/greenwave.png')}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default WelcomePage;