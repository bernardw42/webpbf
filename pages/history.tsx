import Navbar from "@/components/Navbar"
import Header from "@/components/History/Header"
import Description from "@/components/History/Description"
import History from "@/components/History/History"
import Description2 from "@/components/History/Description2"
import Footer from "@/components/Footer"
import Article from "@/components/Article"
import Head from "next/head"

export default function history() {
    return(
        <div>
            <Head>
                <title>Sejarah - Panca Budi Foundation</title>
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
                <History></History>
                <Description2></Description2>
                <Article></Article>
                <Footer></Footer>
            </div>
        </div>
    )
}