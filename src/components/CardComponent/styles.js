import styled from 'styled-components/native'

import { Card } from 'react-native-paper'

export const InfoCard = styled(Card)`
  background-color: white;
  border-radius: 3px;

  display: flex;
  margin-top: 16px;
`

export const Content = styled.View``

export const InfoCardCover = styled(Card.Cover)`
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`
export const Info = styled.View`
  padding: 16px;
`

export const Title = styled.Text`
  font-size: 17px;
  text-align: center;
`
