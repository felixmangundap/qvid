import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler';

import { SignIn, UserSignUp, BusinessSignUp } from './src/screens'
import { Home, Search, StoreDetails, StoreBooking, MyQueue, BookingDetails, SignUpChoice, WelcomePage } from './src/screens'
import { auth, firestore } from './src/firebase/config'
import TabBar from './src/components/TabBar';

const Stack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="SearchPage" component={Search} />
      <SearchStack.Screen name="StoreDetails" component={StoreDetails} />
      <SearchStack.Screen name="StoreBooking" component={StoreBooking} />
    </SearchStack.Navigator>
  );
}

const MyQueueStackScreen = () => {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="BookingPage" component={MyQueue} />
      <SearchStack.Screen name="BookingDetails" component={BookingDetails} />
    </SearchStack.Navigator>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  useEffect(() => {
    const usersRef = firestore().collection('users');
    auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setIsLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setIsLoading(false)
      }
    });
  }, []);

  if (isLoading) {
    // return <Stack.Screen name="Loading" component={Loading} />
    return <Text>Loading</Text>
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {!!user ?
        user.type === 'user' ? (
          <TabBar>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={SearchStackScreen} />
            <Tab.Screen name="Queue" component={MyQueueStackScreen} />
          </TabBar>
        ) : (
          <TabBar>
            <Tab.Screen name="Home" component={BusinessHome} />
            <Tab.Screen name="Scan" component={ScanScreen} />
          </TabBar>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="UserSignUp" component={UserSignUp} />
          <Stack.Screen name="BusinessSignUp" component={BusinessSignUp} />
          <Stack.Screen name="SignUpChoice" component={SignUpChoice} />
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
