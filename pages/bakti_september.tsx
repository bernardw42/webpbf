import Navbar from "@/components/Navbar"
import Bakti from "@/components/Article_Bakti_Sept/bakti_sept"
import Header from "@/components/Article_Bakti_Sept/Header"
import Footer from "@/components/Footer"
import Layout from "@/components/Layout"
import Article from "@/components/Article"
import Head from "next/head"

export default function Activity() {
  return (
    <Layout>
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
        <Bakti></Bakti>
        <Article></Article>
        <Footer></Footer>
      </div>
    </Layout>
  );
}