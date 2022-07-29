import React from 'react'
import { Container, SearchBarContainer, CategoryText } from './styles'

export function SearchComponent() {
  return (
    <Container>
      <SearchBarContainer placeholder="Search recipes" />
      <CategoryText>Latest dishes</CategoryText>
    </Container>
  )
}
