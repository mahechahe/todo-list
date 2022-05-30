import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
import { Div, CountP } from '../styles/CountFavorites';

export const CountFavorites = () => {
  return (
    <Div>
        <MdNotificationsNone size={'30px'}></MdNotificationsNone>
        <CountP>1</CountP>
    </Div>
  )
}
