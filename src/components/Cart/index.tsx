import React from 'react'
import * as C from "./styles"
import {AiOutlineClose} from 'react-icons/ai'
import { ItemCart } from '../ItemCart'
interface CartProps {
  cartVisible:Boolean
}
export const Cart= ({cartVisible}:CartProps) => {
  return (
    <C.ContainerCart cartVisible={cartVisible}>
      <C.ContainerTitle>
        <h3>Carrinho <br/>de compras</h3>
        <div>
          <AiOutlineClose/>
        </div>
      </C.ContainerTitle>
      <C.ContainerItens>
        <ItemCart/>
      </C.ContainerItens>
    </C.ContainerCart>
  )
}

