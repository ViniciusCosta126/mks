import React from "react";
import * as C from "./style";
import Image from "next/image";
import imgTeste from "./shopping.webp";
import { FiShoppingBag } from "react-icons/fi";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/cartSlice";
import { IProducts } from "../../Types/Product";

interface ProductProps {
  product: {
    id: Number;
    name: String;
    brand: String;
    description: String;
    photo: String;
    price: String;
  };
}
export const CardItem = ({ product }: ProductProps) => {
  const dispactch = useAppDispatch();

  const handleAdd = (item: IProducts, qtd: number) => {
    const newItem = {
      product:item,
      qtd,
    };
    dispactch(addToCart(newItem))
  };
  return (
    <C.CardContainer>
      <C.ContentContainer>
        <Image
          src={product.photo}
          width={150}
          height={160}
          alt={"imagemRelogio"}
        />
        <C.TitleValueContainer>
          <h3>{product.name}</h3>
          <div className="value">R${product.price}</div>
        </C.TitleValueContainer>
        <p className="description">{product.description}</p>
      </C.ContentContainer>
      <C.BtnBuy onClick={()=>{handleAdd(product,1)}}>
        <FiShoppingBag />
        <p>comprar</p>
      </C.BtnBuy>
    </C.CardContainer>
  );
};