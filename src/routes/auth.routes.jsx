import React from 'react'
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { RecipeDetails } from '../screens/RecipeDetails'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="RecipeDetails" component={RecipeDetails} />
    </Navigator>
  )
}
