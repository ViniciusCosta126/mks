import { IProducts } from "../Types/Product";

interface ICart {
    product: IProducts;
    qtd: number;
  }
  

export const somarItens = (cart:ICart[]) =>{

    let somaTotal=0 
    cart.map(item=>{
        return somaTotal += item.qtd * parseInt(item.product.price)
    })
    return somaTotal
}