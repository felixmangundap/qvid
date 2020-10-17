import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { auth } from './src/firebase/config'
import 'react-native-gesture-handler';

import { SignIn, Home, SignUp } from './src/screens'
import TabBar from './src/components/TabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // const usersRef = firebase.firestore().collection('users');
    console.log('FETCHING');
    auth().onAuthStateChanged(user => {
      if (user) {
        console.log('USER');
        setUser('props');
        setIsLoading(false);
        // usersRef
        //   .doc(user.uid)
        //   .get()
        //   .then((document) => {
        //     const userData = document.data()
        //     setLoading(false)
        //     setUser(userData)
        //   })
        //   .catch((error) => {
        //     setLoading(false)
        //   });
      } else {
        setIsLoading(false)
      }
    });
  }, []);

  if (isLoading) {

    // return <Stack.Screen name="Loading" component={Loading} />
    return <></>
  }

  return (
    <NavigationContainer>
      {!!user ? (
        <TabBar>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Home} />
        </TabBar>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
