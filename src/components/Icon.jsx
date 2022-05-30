import React from 'react'
import { Div, Text } from '../styles/Icons'

export const Icon = ({Icon, BodyIcon}) => {
  return (
    <Div>
        <Icon></Icon>
        <Text>{BodyIcon}</Text>
    </Div>
  )
}
