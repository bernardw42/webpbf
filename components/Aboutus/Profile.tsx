import Image from "next/image"
import ceo from "@/public/image/aboutus/Fixed/djonny2.png"
// className="drop-shadow-[35px_0px_0_rgba(255,255,255,1)]"

export default function Profile() {
    return(
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blueblub to-redblub w-screen h-[1500px] font-montserrat text-[white] max-lg:pt-[100px]">
            <div className="flex max-lg:flex-col items-center justify-center gap-x-[70px] px-[5%]">
                <Image src={ceo} alt="ceo" width={400} height={400}></Image>
                <div className="flex flex-col font-montserrat lg:w-[480px] lg:pt-[100px] pb-[100px] max-lg:mt-[50px]">
                    <h2 className="font-semibold text-left text-[30px] max-lg:text-center">Djonny Taslim</h2>
                    <p className="font-medium text-[20px] text-left max-lg:text-center">CEO - Panca Budi Group</p>
                    <div className="pt-[40px]">
                    <p className="font-normal text-[20px] text-left max-lg:text-center max-lg:px-[5%]">Bapak Djonny Taslim mendirikan PT Panca Budi Grup pada tahun 1979 dan mengawali kariernya sebagai pedagang umum yang mendistribusi produk jadi kantongan plastik berbahan baku PP, HDPE, dan PE.

Pada tahun 1990, Djonny Taslim mendirikan Perseroan untuk memproduksi dan mendistribusikan produk jadi kantongan plastik.  Perseroan mulai beroperasi secara komersial dengan memproduksi kantongan plastik pada tahun 1991. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}