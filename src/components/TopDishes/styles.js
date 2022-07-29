import styled from 'styled-components/native'

import { Avatar } from 'react-native-paper'

import { ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  padding: 0 16px;
`

export const Title = styled.Text`
  width: 100px;
  text-align: center;

  margin-top: 16px;
  margin-bottom: 16px;
`

export const ImageCardContainer = styled.View``

export const CardImage = styled(Avatar.Image)`
  margin-left: 10px;
`

export const Titles = styled.View``

export const ScrollContent = styled(ScrollView)`
  height: 80%;

  padding-bottom: 16px;

  margin-bottom: 16px;
`

export const ScrollTop = styled(ScrollView)`
  width: 100%;

  flex-direction: row;
`
