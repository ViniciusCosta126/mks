import React from 'react'
import * as C from "./styles"
import {AiOutlineClose} from 'react-icons/ai'
import { ItemCart } from '../ItemCart'
interface CartProps {
  cartVisible:Boolean
  handleCart:()=> void
}
export const Cart= ({cartVisible,handleCart}:CartProps) => {
  return (
    <C.ContainerCart cartVisible={cartVisible}>
      <C.ContainerTitle>
        <h3>Carrinho <br/>de compras</h3>
        <div>
          <AiOutlineClose onClick={handleCart}/>
        </div>
      </C.ContainerTitle>
      <C.ContainerItens>
        <ItemCart/>
        <ItemCart/>
      </C.ContainerItens>
      <C.TotalContainer>
        <p>Total:</p>
        <p>R$798</p>
      </C.TotalContainer>

      <C.ButtonFinishi>Finalizar Compra</C.ButtonFinishi>
    </C.ContainerCart>
  )
}

