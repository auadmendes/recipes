import React from 'react'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

import { Home } from '../screens/Home'
import { Saved } from '../screens/Saved'

import { AuthRoutes } from './auth.routes'

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#DA372B',
        // tabBarInactiveTintColor: 'gray',
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 85,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <Screen
        name="Auth"
        component={AuthRoutes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  )
}
