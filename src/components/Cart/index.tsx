import React from 'react'
import * as C from "./styles"
import {AiOutlineClose} from 'react-icons/ai'
import { ItemCart } from '../ItemCart'
import { useAppSelector } from '../../store/hooks'
import { somarItens } from '../../util/somarTudo'
interface CartProps {
  cartVisible:Boolean
  handleCart:()=> void
}
export const Cart= ({cartVisible,handleCart}:CartProps) => {
  const cart = useAppSelector((state)=>state.cart)
  
  return (
    <C.ContainerCart cartVisible={cartVisible}>
      <C.ContainerTitle>
        <h3>Carrinho <br/>de compras</h3>
        <div>
          <AiOutlineClose onClick={handleCart} data-testid="btnClose"/>
        </div>
      </C.ContainerTitle>
      <C.ContainerItens>

        {cart.length !== 0 ? cart.map(item=>{
          return <ItemCart key={item.product.id} item={item}/>
        }):
        ""
        }
      </C.ContainerItens>
      <C.TotalContainer>
        <p>Total:</p>
        <p>R${somarItens(cart)}</p>
      </C.TotalContainer>

      <C.ButtonFinishi>Finalizar Compra</C.ButtonFinishi>
    </C.ContainerCart>
  )
}

