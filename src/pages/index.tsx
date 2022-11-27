import Head from 'next/head'
import {NavBar} from '../components/NavBar/index'
import { Footer } from '../components/footer';
import * as C from '../styles/Home'
import GridCards from '../components/GridCards';
import { GetServerSideProps } from 'next';
import { ProductProps } from '../Types/Product';



export default function Home({products}:ProductProps) {
  return (
    <div>
      <Head>
        <title>Mks Desenvolvimento</title>      
      </Head>
      <C.ContainerPrincipal>
      <NavBar/>
      <C.ContainerMain>
      <GridCards products={products}/>
      </C.ContainerMain>
      <Footer/>
      </C.ContainerPrincipal>
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
