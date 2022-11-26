import React from 'react'
import * as C from "./style"
import Image from 'next/image'

import {AiOutlineClose} from 'react-icons/ai'
import { IProducts } from '../../Types/Product'
import { useAppDispatch } from '../../store/hooks'
import { removeToCart,removeQtdItemCart,addQtdItemCart } from '../../store/cartSlice'

interface ItemCartProps {
  item:{
    product: IProducts;
    qtd: number;
  }
}
export const ItemCart = ({item}:ItemCartProps) => {
  const dispactch = useAppDispatch();

  const handleRemove = (id:number)=>{
    dispactch(removeToCart(id))
  }
  const handleRemoveQtdItem=(id:number)=>{
    dispactch(removeQtdItemCart(id))
  }
  const handleAddQtdItem=(id:number)=>{
    dispactch(addQtdItemCart(id))
  }
  return  (
    <C.ItemCartContainer>
        <AiOutlineClose onClick={()=>handleRemove(item.product.id)}/>
        <Image width={100} alt="qua" height={100} src={item.product.photo}/>
        <C.ContainerCotent>
          <p className='title-product'>{item.product.name}</p>

          <div className="butons-container">
            <div className='qtd-btn'>
              <span className='qtd-label'>Qtd:</span>
              <button onClick={()=>handleRemoveQtdItem(item.product.id)}>-</button>
              <p>{item.qtd}</p>
              <button onClick={()=>handleAddQtdItem(item.product.id)}>+</button>
            </div>
            <div className='value'>
              R${parseInt(item.product.price)}
            </div>
          </div>
        </C.ContainerCotent>
    </C.ItemCartContainer>
  )
}
