import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Header from "@/components/Gallery/Header"
import Description from "@/components/Gallery/Description"
import Slideshow from "@/components/Gallery/Slideshow"
import Slideshow2 from "@/components/Gallery/Sliders"
import Gallery from "@/components/Gallery/Gallery"
import Head from "next/head"
import Article from "@/components/Article"

export default function gallery() {
    return(
        <div>
            <Head>
                <title>Galeri - Panca Budi Foundation</title>
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
            <Slideshow></Slideshow>
            <Slideshow2></Slideshow2>
            <Gallery></Gallery>
            <Article></Article>
            <Footer></Footer>
        </div>
        </div>
    )
}