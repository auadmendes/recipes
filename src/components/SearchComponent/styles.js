import styled from 'styled-components/native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Searchbar } from 'react-native-paper'

export const Container = styled.View`
  width: 100%;
  padding: 16px;
`

export const SearchBarContainer = styled(Searchbar)`
  border-radius: 3px;
`

export const CategoryText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 400;

  padding-top: 16px;
`

export const Spacer = styled.View`
  padding: 16px;
`
