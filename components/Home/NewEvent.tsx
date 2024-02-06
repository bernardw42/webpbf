import Image from "next/image"
import bangunan from "@/public/image/activity/Events/Fixed/12.jpg"
import Link from "next/link"

export default function NewEvent() {
    return(
        <div className="flex flex-col justify-center items-center bg-greyblub w-screen h-[1200px] font-montserrat pt-[100px] pb-[100px] z-20">
            <h1 className="max-w-[1000px] text-center mb-[45px] font-semibold text-[35px]">Event Terakhir</h1>
            <div className="flex">
              <div className="bg-redblub w-[100px] h-[20px]"></div>
              <div className="bg-blueblub w-[100px] h-[20px]"></div>
            </div>
            <div className="flex justify-center mt-[90px] gap-x-[50px] max-[900px]:flex-col max-[900px]:px-4">
                <Image src={bangunan} className="max-[900px]:pb-[30px] pl-4" alt="headline" width={480} height={480}></Image>
                    <div className="flex flex-col justify-between font-montserrat max-[900px]:gap-y-[50px] max-[900px]:items-center">
                        <div className="flex flex-col justify-end ">
                            <h2 className="font-semibold text-left text-[25px] max-[900px]:text-center">Donor Darah Rutin</h2>
                            <h2 className="font-semibold text-left text-[15px] max-[900px]:text-center">September 2023</h2>
                        </div>
                        <p className="max-w-[480px] font-normal text-[20px] text-left max-[900px]:text-center">Panca Budi Foundation melakukan kegiatan donor darah rutin di 6 kantor milik Panca Budi yaitu Panca Budi Logistik (Agus Salim), PT. Rendaplas Andika, PT. Panca Budi Idaman (Batu Ceper), Panca Budi (KPNT), PT. Panca Budi Niaga (Alam Sutera), PT. Panca Kraft Pratama.</p>
                        <div>
                            <a href="/activity">
                                <button className="bg-gradient-to-r from-blueblub to-redblub hover:brightness-75 py-2 px-4 rounded bottom-10 text-[white] font-semibold">
                                    Lihat Lainnya
                                </button>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}