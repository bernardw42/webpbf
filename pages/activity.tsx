import Navbar from "@/components/Navbar"
import Header from "@/components/Activity/Header"
import Description from "@/components/Activity/Description"
import Services from "@/components/Activity/Services"
import Events from "@/components/Activity/Events"
import Footer from "@/components/Footer"
import Article from "@/components/Article"
import Head from "next/head"
import { useEffect } from "react"

export default function Activity() {
return(
        <div>
            <Head>
                <title>Aktivitas - Panca Budi Foundation</title>
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
        <div id="tes" className="relative bg-gray-50 flex flex-col items-center h-[100vh]">
            <Navbar></Navbar>
            <Header></Header>
            <Description></Description>
            <Services></Services>
            <Events></Events>
            <Article></Article>
            <Footer></Footer>
        </div>
        </div>
    )
}