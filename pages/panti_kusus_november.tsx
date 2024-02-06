import Navbar from "@/components/Navbar"
import Header from "@/components/Article_Kusus_Nov23/Header"
import Kusus from "@/components/Article_Kusus_Nov23/kusus_nov23"
import Footer from "@/components/Footer"
import Head from "next/head"
import Article from "@/components/Article"

export default function activity() {
    return(
        <div>
            <Head>
                <title>Artikel - Panca Budi Foundation</title>
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
            <Kusus></Kusus>
            <Article></Article>
            <Footer></Footer>
        </div>
        </div>
    )
}