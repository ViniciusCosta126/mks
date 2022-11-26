import Head from 'next/head'
import {NavBar} from '../components/NavBar/index'
import { Montserrat } from "@next/font/google";
import { Footer } from '../components/footer';
import * as C from '../styles/Home'
import GridCards from '../components/GridCards';
import { GetServerSideProps } from 'next';
import { ProductProps } from '../Types/Product';
const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  style: "normal",
  subsets:['latin']
});


export default function Home({products}:ProductProps) {
  return (
    <div className={montserrat.className}>
      <Head>
        <title>Mks Desenvolvimento</title>      
      </Head>
      <NavBar/>
      <C.ContainerMain>
      <GridCards products={products}/>
      </C.ContainerMain>
      <Footer/>
    </div>
  )
}
export const getServerSideProps:GetServerSideProps = async ()=>{
  const response = await fetch("https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=ASC")
  const {products} = await response.json()
  return {
    props:{
      products
    }
  }
}
