import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';

const SignUpChoice = ({navigation}) => {

    const onFooterLinkPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, height: '100%', width:'100%'}} ContentContainerStyle={{flexGrow: 1,
                justifyContent: 'center'}}
                keyboardShouldPersistTaps="always">
                <StatusBar style="light" />
                <Image
                    style={styles.logo}
                    source={require('../../assets/whitelogoicon.png')}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Register</Text>
                    <Text style={styles.subtitle}>Choose your account type</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('UserSignUp')}>
                    <Text style={styles.buttonTitle}>I am a user</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonWhite}
                    onPress={() => navigation.navigate('BusinessSignUp')}>
                    <Text style={styles.buttonTitleGreen}>I own a business</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
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

export default SignUpChoice;