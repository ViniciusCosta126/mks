import React from 'react'
import * as C from "./style"
import Image from 'next/image'
import Img  from "./shopping.webp"

export const ItemCart = () => {
  return (
    <C.ItemCartContainer>
        <Image width={80} alt="qua" height={95} src={Img}/>
    </C.ItemCartContainer>
  )
}
