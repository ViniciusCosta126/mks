import React from 'react'
import * as C from "./style"
import Image from 'next/image'
import Img  from "./shopping.webp"
import {AiOutlineClose} from 'react-icons/ai'
import { IProducts } from '../../Types/Product'

interface ItemCartProps {
  item:{
    product: IProducts;
    qtd: number;
  }
}
export const ItemCart = ({item}:ItemCartProps) => {
  
  return  (
    <C.ItemCartContainer>
        <AiOutlineClose/>
        <Image width={100} alt="qua" height={100} src={item.product.photo}/>
        <C.ContainerCotent>
          <p className='title-product'>{item.product.name}</p>

          <div className="butons-container">
            <div className='qtd-btn'>
              <button>-</button>
              <p>{item.qtd}</p>
              <button>+</button>
            </div>
            <div className='value'>
              R${item.product.price}
            </div>
          </div>
        </C.ContainerCotent>
    </C.ItemCartContainer>
  )
}
