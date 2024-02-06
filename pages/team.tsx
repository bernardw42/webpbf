import Navbar from "@/components/Navbar"
import Header from "@/components/Tim/Header"
import Description from "@/components/Tim/Description"
import Operational from "@/components/Tim/Operational"
import Finance from "@/components/Tim/Finance"
import Digital from "@/components/Tim/Digital"
import Footer from "@/components/Footer"
import Article from "@/components/Article"
import Head from "next/head"

export default function tim() {
    return(
        <div>
            <Head>
                <title>Tim Kami - Panca Budi Foundation</title>
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
                <Header></Header>
                <Description></Description>
                <Operational></Operational>
                <Finance></Finance>
                <Digital></Digital>
                <Article></Article>
                <Footer></Footer>
            </div>
        </div>
    )
}