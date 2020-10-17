import React from 'react'
import { Text, View, SafeAreaView, Button } from 'react-native'
import { signout } from '../../firebase/auth';

const MyQueue = (props) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
            <Text>Can you see this?</Text>
            <Button onPress={() => signout()} title="Logout" color="#841584"/>
        </SafeAreaView>
    )
}

export default MyQueue;