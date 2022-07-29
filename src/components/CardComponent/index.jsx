import React from 'react'

import { Content, InfoCard, InfoCardCover, Info, Title } from './styles'

export function CardComponent({ imageUrl, title }) {
  return (
    <InfoCard>
      <Content>
        <InfoCardCover
          key="food"
          source={{
            uri: imageUrl
          }}
        />
      </Content>
      <Info>
        <Title>{title}</Title>
      </Info>
    </InfoCard>
  )
}
