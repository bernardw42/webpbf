import Image from "next/image"
import b from "@/public/image/gallery/Fixed/b.jpg"
import b2 from "@/public/image/gallery/Fixed/b2.jpg"
import b3 from "@/public/image/gallery/Fixed/b3.jpg"
import b4 from "@/public/image/gallery/Fixed/b4.jpg"
import b5 from "@/public/image/gallery/Fixed/b5.jpg"
import b6 from "@/public/image/gallery/Fixed/b6.jpg"

export default function Gallery() {
    return(
        <div className="flex flex-col justify-center items-center bg-greyblub w-screen h-[4000px] font-montserrat pt-[100px] pb-[30px]">
            <h1 className="max-w-[1000px] text-center mb-[45px] font-semibold text-[35px] max-lg:px-[5%]">Kumpulan Foto-Foto Event Kami</h1>
            <div className="flex mb-[20px]">
              <div className="bg-redblub w-[100px] h-[20px]"></div>
              <div className="bg-blueblub w-[100px] h-[20px]"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-y-[50px] gap-x-[70px] mt-[50px] px-[5%]">
                <Image className="hover:scale-105 duration-200 ease-in-out" src={b} alt="a" height={600} width={450}></Image>
                <Image className="hover:scale-105 duration-200 ease-in-out" src={b2} alt="a" height={600} width={450}></Image>
            </div> 
            <div className="flex flex-wrap justify-center gap-y-[50px] gap-x-[70px] mt-[50px] px-[5%]">
                <Image className="hover:scale-105 duration-200 ease-in-out" src={b3} alt="a" height={600} width={450}></Image>
                <Image className="hover:scale-105 duration-200 ease-in-out" src={b4} alt="a" height={600} width={450}></Image>
            </div>
            <div className="flex flex-wrap justify-center gap-y-[50px] gap-x-[70px] mt-[50px] px-[5%]">
                <Image className="hover:scale-105 duration-200 ease-in-out" src={b5} alt="a" height={600} width={450}></Image>
                <Image className="hover:scale-105 duration-200 ease-in-out" src={b6} alt="a" height={600} width={450}></Image>
            </div>
            {/* <div className="pt-[70px]">
                <button className="bg-gradient-to-r from-blueblub to-redblub hover:brightness-75 py-2 px-4 rounded bottom-10">
                    <p className="text-[white] bg-clip-text text-transparent font-montserrat font-semibold text-[20px]">Pelajari Lebih Lanjut</p>
                </button>
            </div> */}
        </div>
    )
}