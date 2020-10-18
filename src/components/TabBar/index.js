import React, { useEffect, useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';

const Tab = createBottomTabNavigator();

const TabBar = ({ children }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Search') {
            iconName = 'magnify';
          } else if (route.name === 'Queue') {
            iconName = 'credit-card-scan-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.qvidGreen,
        inactiveTintColor: colors.qvidDarkGrey,
        showLabel: false,
        style: {
          borderWidth: 0,
        }
      }}
    >
      {children}
    </Tab.Navigator>
  )
}

export default TabBar;