import React, { useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

import {
  Container,
  IconContainer,
  Icon,
  Content,
  ImageContainer,
  ImageContent,
  CatHolder,
  HolderContainer,
  Ingredients,
  IngredientContainer,
  TextIngredient,
  DescriptionButton,
  ScrollContainer,
  ButtonText,
  Steps
} from './styles'

export function RecipeDetails({}) {
  const placeholder = 'http://via.placeholder.com/640x360'
  const navigation = useNavigation()
  const route = useRoute()

  const [description, setDescription] = useState(false)

  const { uri, ingredients, steps, title, id } = route.params

  function handleOpenSteps() {
    setDescription(!description)
  }

  return (
    <Container>
      <ScrollContainer>
        <Content>
          <IconContainer onPress={() => navigation.goBack()}>
            <Icon name="arrow-down" color="gray" />
          </IconContainer>
          <ImageContainer>
            <ImageContent
              source={{
                uri: uri
              }}
            />
          </ImageContainer>
          <HolderContainer>
            <CatHolder>{`${title} - Ingredients ${ingredients.length}`}</CatHolder>
          </HolderContainer>

          <Ingredients>
            {description ? (
              <>
                {ingredients.map(ingredient => (
                  <IngredientContainer key={id}>
                    <TextIngredient>{ingredient}</TextIngredient>
                  </IngredientContainer>
                ))}
              </>
            ) : (
              <Steps>{steps}</Steps>
            )}

            <DescriptionButton onPress={handleOpenSteps}>
              <ButtonText>
                {description ? 'How to do' : 'Ingredients'}
              </ButtonText>
            </DescriptionButton>
          </Ingredients>
        </Content>
      </ScrollContainer>
    </Container>
  )
}
