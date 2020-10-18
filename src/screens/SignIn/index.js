import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { StatusBar } from 'expo-status-bar';

import { signin } from '../../firebase/auth';
import styles from './styles';

const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('SignUpChoice')
    }

    const onLoginPress = () => {
        signin(email, password);
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
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subtitle}>Login with an existing account</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Register</Text></Text>
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

export default SignIn;