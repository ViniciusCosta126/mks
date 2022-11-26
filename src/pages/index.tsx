import Head from 'next/head'
import {NavBar} from '../components/NavBar/index'
import { Montserrat } from "@next/font/google";
import { Footer } from '../components/footer';
import * as C from '../styles/Home'
const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  style: "normal",
  subsets:['latin']
});
export default function Home() {
  return (
    <div className={montserrat.className}>
      <Head>
        <title>Mks Desenvolvimento</title>      
      </Head>
      <NavBar/>
      <C.ContainerMain>
      
      </C.ContainerMain>
      <Footer/>
    </div>
  )
}
