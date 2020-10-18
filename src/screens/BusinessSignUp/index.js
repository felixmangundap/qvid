import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import { businessSignup } from '../../firebase/auth';
import styles from './styles';

const BusinessSignUp = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [openingHour, setOpeningHour] = useState('')
    const [closingHour, setClosingHour] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [limit, setLimit] = useState('')
    const [maxQueue, setMaxQueue] = useState('')
    const [maxTime, setMaxTime] = useState('')
    const [page, setPage] = useState(1)

    const onFooterLinkPress = () => {
        navigation.navigate('SignIn')
    }

    const onRegisterPress = () => {
        // businessSignup(email, password);
    }

    const pageOne = () => {
        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Register</Text>
                    <Text style={styles.subtitle}>Register your business account</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Business Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Business E-mail'
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
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setPage(page + 1)}>
                    <Text style={styles.buttonTitle}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const pageTwo = () => {
        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Register</Text>
                    <Text style={styles.subtitle}>Specify your business' details</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Opening Hours'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setOpeningHour(text)}
                    value={openingHour}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Closing Hours'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setClosingHour(text)}
                    value={closingHour}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Address'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setAddress(text)}
                    value={address}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Phone Number'
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setPage(page + 1)}>
                    <Text style={styles.buttonTitle}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setPage(page - 1)}>
                    <Text style={styles.buttonTitle}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const pageThree = () => {
        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Register</Text>
                    <Text style={styles.subtitle}>Select your COVID-19 measures</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Number of crowd limit'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setLimit(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setPage(page + 1)}>
                    <Text style={styles.buttonTitle}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setPage(page - 1)}>
                    <Text style={styles.buttonTitle}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const pageFour = () => {
        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Register</Text>
                    <Text style={styles.subtitle}>Input your user queue limits</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Maximum number of user per queue'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setMaxQueue(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Maximum timeframe per queue'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setMaxTime(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setPage(page - 1)}>
                    <Text style={styles.buttonTitle}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/whitelogoicon.png')}
                />
                {page === 1 ? pageOne() : page===2 ? pageTwo() : page===3 ? pageThree() : pageFour() }
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

export default BusinessSignUp;