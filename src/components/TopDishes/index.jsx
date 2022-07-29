import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { CardComponent } from '../CardComponent'
import { TouchableOpacity, ScrollView, Alert } from 'react-native'

import {
  Container,
  Title,
  CardImage,
  ScrollContent,
  ScrollTop,
  ImageCardContainer
} from './styles'

import { client, urlFor } from '../../lib/client'

export function TopDishes() {
  const navigation = useNavigation()
  const [recipes, setRecipes] = useState([])

  async function handleLoadData() {
    const query = '*[_type == "recipes"]'
    const recipes = await client.fetch(query)

    setRecipes(recipes)
  }

  function handleAlert() {
    Alert.alert('Alert')
  }

  useEffect(() => {
    handleLoadData()
  }, [recipes])

  return (
    <ScrollContent
    //refreshControl={<RefreshControl onRefresh={handleAlert()} />}
    >
      <Container>
        <ScrollTop horizontal showsHorizontalScrollIndicator={false}>
          {recipes.map((recipe, index) => {
            if (index >= 3) {
              return
            }
            return (
              <TouchableOpacity
                key={recipe._id}
                onPress={() => {
                  navigation.navigate('RecipeDetails', {
                    uri: urlFor(recipe.image).url(),
                    ingredients: recipe.ingredients,
                    steps: recipe.steps,
                    title: recipe.title,
                    id: recipe._id
                  })
                }}
              >
                <CardImage
                  size={100}
                  key={recipe._id}
                  source={{
                    uri: urlFor(recipe.image).url()
                  }}
                />
              </TouchableOpacity>
            )
          })}
        </ScrollTop>

        <Title>Recipes</Title>
        {recipes.map(recipe => {
          return (
            <TouchableOpacity
              key={recipe._id}
              onPress={() => {
                navigation.navigate('RecipeDetails', {
                  uri: urlFor(recipe.image).url(),
                  ingredients: recipe.ingredients,
                  steps: recipe.steps,
                  title: recipe.title,
                  id: recipe._id
                })
              }}
            >
              <CardComponent
                title={recipe.title}
                imageUrl={urlFor(recipe.image).url()}
              />
            </TouchableOpacity>
          )
        })}
      </Container>
    </ScrollContent>
  )
}
