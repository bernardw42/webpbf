import Image from "next/image"
import event1 from "@/public/image/activity/Events/Fixed/12.jpg"
import event2 from "@/public/image/activity/Events/Fixed/11.jpg"
import event3 from "@/public/image/activity/Events/Fixed/3.jpg"


export default function Events() {
    return (
        <div className="flex flex-col justify-center items-center bg-greyblub w-screen h-[5200px] font-montserrat pt-[100px]">
            <h1 className="max-w-[1000px] text-center mb-[45px] font-semibold text-[35px] max-lg:px-4">Event-Event Terakhir</h1>
            <div className="flex">
              <div className="bg-redblub w-[100px] h-[20px]"></div>
              <div className="bg-blueblub w-[100px] h-[20px]"></div>
            </div>
            <div className="flex max-lg:flex-col justify-end items-center text-[white] w-full lg:h-[450px] h-[900px] mt-[70px]">
                <Image className="object-cover bg-center w-screen h-[450px] lg:hidden" src={event1} alt="event"></Image>
                <div className="flex flex-col justify-center items-center gap-y-[50px] bg-gradient-to-b from-blueblub to-redblub lg:w-[650px] w-screen h-[450px] px-[50px]">
                            <div className="flex flex-col">
                                <h2 className="font-semibold text-center text-[25px]">Donor Darah Rutin</h2>
                                <h2 className="font-semibold text-center text-[20px]">September 2023</h2>
                            </div>
                            <p className="max-w-[600px] font-normal text-[20px] text-center line-clamp-6">Panca Budi Foundation melakukan kegiatan donor darah rutin di 6 kantor milik Panca Budi yaitu Panca Budi Logistik (Agus Salim), PT. Rendaplas Andika, PT. Panca Budi Idaman (Batu Ceper), Panca Budi (KPNT), PT. Panca Budi Niaga (Alam Sutera), PT. Panca Kraft Pratama.</p>
                            {/* <div>
                                <button className="bg-[white] hover:brightness-75 py-2 px-4 rounded bottom-10">
                                    <p className="text-[black] bg-clip-text text-transparent font-montserrat font-semibold text-[15px]">Pelajari Lebih Lanjut</p>
                                </button>
                            </div> */}
                </div>
                <div style={{ backgroundImage: `url(${event1.src})` }} className="drop-shadow-lg w-1/2 h-[450px] bg-cover bg-top brightness-[70%] max-lg:hidden"></div>
                {/* <Image className="object-cover md:bg-top bg-center w-1/2 h-[450px] max-lg:hidden" src={event1} alt="event"></Image> */}
            </div>

            <div className="flex max-lg:flex-col justify-start items-center text-[white] w-full lg:h-[450px] h-[900px] mt-[70px]">
                <div style={{ backgroundImage: `url(${event2.src})` }} className="drop-shadow-lg lg:w-1/2 w-screen h-[450px] bg-cover bg-top brightness-[70%]"></div>
                {/* <Image className="object-cover md:bg-top bg-center lg:w-1/2 w-screen h-[450px]" src={event2} alt="event"></Image> */}
                <div className="flex flex-col justify-center items-center gap-y-[50px] bg-gradient-to-b from-blueblub to-redblub lg:w-[650px] w-screen h-[450px] px-[50px]">
                        <div className="flex flex-col">
                            <h2 className="font-semibold text-center text-[25px]">Kerja Bakti</h2>
                            <h2 className="font-semibold text-center text-[20px]">Semptember 2023</h2>
                        </div>
                        <p className="max-w-[600px] font-normal text-[20px] text-center line-clamp-6">Pada kegiatan kali ini, Panca Budi Foundation melakukan kegiatan kerja bakti di kantor pusat Panca Budi. Kegiatan kerja bakti yang diinisiasi oleh perusahaan di sekitar yang merupakan upaya kolaboratif untuk memperbaiki dan memelihara lingkungan sekitar.</p>
                        {/* <div className="pt-[40px]">
                            <button className="bg-[white] hover:brightness-75 py-2 px-4 rounded bottom-10">
                                <p className="text-[black] bg-clip-text text-transparent font-montserrat font-semibold text-[15px]">Pelajari Lebih Lanjut</p>
                            </button>
                        </div> */}
                    </div>
            </div>

            <div className="flex max-lg:flex-col justify-end items-center text-[white] w-full lg:h-[450px] h-[900px] mt-[70px] mb-[70px]">
                <Image className="object-cover md:bg-top bg-center w-screen h-[450px] lg:hidden" src={event3} alt="event"></Image>
                <div className="flex flex-col justify-center items-center gap-y-[50px] bg-gradient-to-b from-blueblub to-redblub lg:w-[650px] w-screen h-[450px] px-[50px]">
                            <div className="flex flex-col">
                                <h2 className="font-semibold text-center text-[25px]">Panti Jompo Kasih Karunia</h2>
                                <h2 className="font-semibold text-center text-[20px]">Agustus 2023</h2>
                            </div>
                            <p className="max-w-[600px] font-normal text-[20px] text-center line-clamp-6">Pada kegiatan kali ini, kami dari Panca Budi Foundation berkesempatan untuk mengunjungi Panti Jompo Kasih Karunia yang berlokasi di daerah Bogor. Pada kesempatan kali ini, selain dari bantuan, kami juga sangat beruntung karena kami dapat bernyanyi dan tertawa bersama dengan mereka. </p>
                            {/* <div className="pt-[40px]">
                                <button className="bg-[white] hover:brightness-75 py-2 px-4 rounded bottom-10">
                                    <p className="text-[black] bg-clip-text text-transparent font-montserrat font-semibold text-[15px]">Pelajari Lebih Lanjut</p>
                                </button>
                            </div> */}
                </div>
                <Image className="object-cover md:bg-top bg-center w-1/2 h-[450px] max-lg:hidden" src={event3} alt="event"></Image>
            </div>
        </div>

    )
}