import React from 'react'

import { SearchComponent } from '../../components/SearchComponent'
import { TopDishes } from '../../components/TopDishes'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <SearchComponent />
      <TopDishes />
    </Container>
  )
}
