import Navbar from "@/components/Navbar"
import SlideshowHome from "@/components/Home/SlideshowHome"
import InfoCard from "@/components/Home/InfoCard"
import InfoCard2 from "@/components/Home/InfoCard2"
import Description from "@/components/Home/Description"
import CompanyServices from "@/components/Home/CompanyServices"
import NewEvent from "@/components/Home/NewEvent"
import Schedule from "@/components/Home/Schedule"
import Article from "@/components/Article"
import Head from "next/head"
import Footer from "@/components/Footer"
import { useEffect } from "react"

export default function Home() {
  return (
    <div>
      <Head>
          <title>Panca Budi Foundation</title>
            {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-X4VJP7FC60"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-X4VJP7FC60');
              `,
            }}
          />
      </Head>
      <div className="relative bg-gray-50 flex flex-col items-center h-[100vh]">
          <Navbar></Navbar>
          <SlideshowHome></SlideshowHome>
          <InfoCard></InfoCard>
          <InfoCard2></InfoCard2>
          <Description></Description>
          <CompanyServices></CompanyServices>
          <NewEvent></NewEvent>
          <Schedule></Schedule>
          <Article></Article>
          <Footer></Footer>
      </div>
    </div>
  )
}
