import React from 'react'
import { ProductProps } from '../../Types/Product'
import { CardItem } from '../CardItem'
import * as C from './style'
const GridCards = ({products}:ProductProps) => {
  return (
    <C.GridContainer>
      {products.map(product =>{
        return(
          <CardItem key={product.id} product={product}/>
        )
      })}
    </C.GridContainer>
  )
}

export default GridCards