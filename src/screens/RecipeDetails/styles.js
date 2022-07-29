import styled from 'styled-components/native'
import { SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;

  //margin-top: 170px;

  border-radius: 10px;
`
export const Content = styled.View``

export const IconContainer = styled(TouchableOpacity)`
  margin-top: 10px;
`

export const Icon = styled(Feather)`
  font-size: 20px;

  padding: 0 10px;
  margin-bottom: 10px;
`

export const ImageContainer = styled.View``

export const ImageContent = styled(Image)`
  width: 100%;
  height: ${RFValue(250)}px;

  background-color: white;
`
export const HolderContainer = styled.View`
  // background-color: rgba(255, 255, 255, 0.3);
  width: 95%;
  height: 40px;

  justify-content: center;

  margin-top: 8px;
  padding-left: 10px;
`

export const CatHolder = styled.Text`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: #555555;
`

export const ScrollContainer = styled(ScrollView)`
  height: 100%;
`

export const Ingredients = styled(SafeAreaView)`
  flex-direction: column;

  width: 100%;

  align-items: center;
  justify-content: center;
`

export const IngredientContainer = styled.View`
  height: 60px;
  width: 90%;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #e3e3e3;

  border-radius: 3px;

  padding: 16px;

  margin-bottom: 16px;
`
export const TextIngredient = styled.Text`
  font-size: 15px;
  color: black;
  margin-left: 10px;
  font-weight: 500;
`

export const DescriptionButton = styled.TouchableOpacity`
  padding: 20px;
  height: 60px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #4db065;
`
export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`

export const Steps = styled.Text`
  font-size: 16px;
  color: black;

  margin-top: 16px;
  margin-bottom: 26px;

  padding: 8px;
`
