import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler';

import { SignIn, UserSignUp, BusinessSignUp } from './src/screens'
import { Home, Search } from './src/screens'
import { auth, firestore } from './src/firebase/config'
import TabBar from './src/components/TabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="StoreDetails" component={Home} />
    </SearchStack.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firestore().collection('users');
    console.log('FETCHING');
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
      {!!user ? (
        <TabBar>
          <Tab.Screen name="Home" component={Search} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="Queue" component={Home} />
        </TabBar>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="UserSignUp" component={UserSignUp} />
          <Stack.Screen name="BusinessSignUp" component={BusinessSignUp} />
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
