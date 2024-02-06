import React from "react";
import blood from "@/public/image/article/3/a.jpg"
import Image from "next/image"

export default function Article1() {
    return (
        <div className="flex flex-col justify-center items-center bg-greyblub w-screen h-[3000px] font-montserrat pt-[156px] pb-[30px] max-lg:px-[5%]">
            <h1 className="max-w-[1000px] text-center mb-[45px] font-semibold text-[35px] max-lg:px-[5%]">Kunjungan Penuh Makna ke Panti Sosial Berkebutuhan Khusus</h1>
            <div className="flex">
              <div className="bg-redblub w-[100px] h-[20px]"></div>
              <div className="bg-blueblub w-[100px] h-[20px]"></div>
            </div>
            <div className="flex flex-col max-w-[1000px] gap-y-[30px] justify-around items-center font-montserrat font-normal text-justify text-[20px] mt-[50px] indent-16">
                <p>
                Kehadiran di Panti Sosial Berkebutuhan Khusus adalah pengalaman yang mendalam dan memperkaya jiwa. Saat memasuki pintu gerbang, kami disambut dengan senyuman hangat dari para penghuni panti. Mereka adalah pahlawan sejati, yang dengan tekun dan semangat gigih mengatasi setiap rintangan dalam hidup mereka.</p>
                <Image src={blood} alt="headline" width={800} height={480}></Image>
                <p>
                Selama kunjungan, kami memiliki kesempatan untuk berinteraksi langsung dengan para penghuni panti. Setiap cerita hidup mereka adalah kisah ketabahan dan keberanian. Meskipun dihadapkan dengan tantangan, mereka menunjukkan semangat yang luar biasa untuk tetap berkarya dan memberikan inspirasi bagi orang di sekitar mereka.  
                </p>
                <p>
                Kunjungan ini juga mengajarkan pentingnya inklusi sosial. Menyaksikan bagaimana masyarakat lokal bersama-sama mendukung dan membimbing para penghuni panti adalah bukti nyata bahwa kebersamaan membangun fondasi yang kuat untuk memajukan kesejahteraan bersama.
                </p>
                <p>
                Pulang dari kunjungan ini, kami membawa banyak pelajaran berharga. Pengalaman ini mengingatkan kami akan kekuatan manusia untuk saling mendukung, menginspirasi, dan merangkul perbedaan. Semoga kita semua dapat terus berkontribusi dalam menciptakan masyarakat yang inklusif dan berempati, di mana setiap individu dihargai dan diakui.
                </p>
            </div>
        </div>
    )
}