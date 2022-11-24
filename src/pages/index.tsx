import Head from 'next/head'
import {NavBar} from '../components/NavBar/index'
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  style: "normal",
  subsets:['latin']
});
export default function Home() {
  return (
    <div className={montserrat.className}>
      <Head>
        <title>Create Next App</title>      
      </Head>
      <NavBar/>
      
    </div>
  )
}
