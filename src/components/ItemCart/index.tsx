import React from 'react'
import * as C from "./style"
import Image from 'next/image'
import Img  from "./shopping.webp"
import {AiOutlineClose} from 'react-icons/ai'
export const ItemCart = () => {
  return (
    <C.ItemCartContainer>
        <AiOutlineClose/>
        <Image width={100} alt="qua" height={100} src={Img}/>
        <C.ContainerCotent>
          <p className='title-product'>Apple Watch Series 4 GPS</p>

          <div className="butons-container">
            <div className='qtd-btn'>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <div className='value'>
              R$399
            </div>
          </div>
        </C.ContainerCotent>
    </C.ItemCartContainer>
  )
}
