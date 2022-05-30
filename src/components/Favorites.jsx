import React from 'react'
import { Div, Img } from '../styles/Favorite'
import { ImageApi } from '../services/ApiImage';

export const Favorites = ({id}) => {
  const image = ImageApi[id].Image;
  return (
    <Div>
        <Img src={image} alt="" />
    </Div>
  )
}
