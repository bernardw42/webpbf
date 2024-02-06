import Navbar from "@/components/Navbar"
import Description from "@/components/Aboutus/Description"
import Header from "@/components/Aboutus/Header"
import Profile from "@/components/Aboutus/Profile"
import VM from "@/components/Aboutus/VM"
import History from "@/components/Aboutus/History"
import Owners from "@/components/Aboutus/Owners"
import Footer from "@/components/Footer"
import Head from "next/head"
import Article from "@/components/Article"

export default function aboutus() {
    return(
        <div>
            <Head>
                <title>Tentang Kami - Panca Budi Foundation</title>
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
            <Profile></Profile>
            <VM></VM>
            <History></History>
            <Owners></Owners>
            <Article></Article>
            <Footer></Footer>
        </div>
        </div>
    )
}