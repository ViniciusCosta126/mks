import React, { useState } from 'react'
import * as C from './styles'
import {TiShoppingCart} from 'react-icons/ti'
import {Cart} from '../Cart/index'

export const NavBar = () => {
  const [cartVisible,setCartVisible] =  useState<Boolean>(false)

  const handleCart = ()=>{
    setCartVisible(!cartVisible)
  }
  return (
    <C.Navbar>
        <C.Title>mks <span>sistemas</span></C.Title>
        <C.ContainerButton onClick={handleCart}>
            <TiShoppingCart size={24}/>
            <p>0</p>
        </C.ContainerButton>
        <Cart cartVisible={cartVisible}/>
    </C.Navbar>
  )
}

