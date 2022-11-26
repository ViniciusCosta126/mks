import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { TiShoppingCart } from "react-icons/ti";
import { Cart } from "../Cart/index";
import { useAppSelector } from "../../store/hooks";

export const NavBar = () => {
  const [cartVisible, setCartVisible] = useState<Boolean>(false);
  const cart = useAppSelector((state) => state.cart);
  const [cartItens,setCartItens] =useState(cart.length)
  const handleCart = () => {
    setCartVisible(!cartVisible);
  };
  useEffect(()=>{
    let totalItens =0
    cart.map(item =>{
      return totalItens += item.qtd
    })
    setCartItens(totalItens)
  },[cart])
  return (
    <C.Navbar>
      <C.Title>
        mks <span>sistemas</span>
      </C.Title>
      <C.ContainerButton onClick={handleCart}>
        <TiShoppingCart size={24} />
        <p>{cartItens}</p>
      </C.ContainerButton>
      <Cart cartVisible={cartVisible} handleCart={handleCart} />
    </C.Navbar>
  );
};
