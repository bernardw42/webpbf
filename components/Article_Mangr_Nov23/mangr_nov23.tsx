import React from "react";
import blood from "@/public/image/article/4/a.jpg"
import Image from "next/image"

export default function Article1() {
    return (
        <div className="flex flex-col justify-center items-center bg-greyblub w-screen h-[3000px] font-montserrat pt-[156px] pb-[30px] max-lg:px-[5%]">
            <h1 className="max-w-[1000px] text-center mb-[45px] font-semibold text-[35px] max-lg:px-[5%]">Menanam Harapan: 15.000 Pohon Mangrove untuk Masa Depan Lebih Hijau</h1>
            <div className="flex">
              <div className="bg-redblub w-[100px] h-[20px]"></div>
              <div className="bg-blueblub w-[100px] h-[20px]"></div>
            </div>
            <div className="flex flex-col max-w-[1000px] gap-y-[30px] justify-around items-center font-montserrat font-normal text-justify text-[20px] mt-[50px] indent-16">
                <p>
                Suatu langkah besar telah diambil untuk melestarikan lingkungan pesisir di Pantai Kita. Dengan semangat gotong royong dan komitmen yang tinggi, telah berhasil ditanam sebanyak 15.000 pohon mangrove.</p>
                <Image src={blood} alt="headline" width={800} height={480}></Image>
                <p>
                Mangrove bukan hanya sekadar pepohonan, tapi pahlawan pesisir yang memainkan peran penting dalam menjaga kelestarian ekosistem. Mereka melindungi garis pantai dari abrasi dan memberikan tempat tinggal bagi berbagai spesies laut.  
                </p>
                <p>
                Kegiatan reboisasi ini merupakan bukti nyata bahwa ketika komunitas bersatu, dampak positif dapat tercipta. Proyek ini juga memberi pelajaran berharga tentang pentingnya menjaga lingkungan alam kita demi keberlangsungan hidup bersama.
                </p>
                <p>
                Dengan 15.000 pohon mangrove yang ditanam, harapan akan masa depan yang lebih hijau dan lestari semakin mendekati. Semoga tindakan ini akan menjadi inspirasi bagi komunitas lain untuk melakukan upaya serupa demi bumi yang lebih baik.
                </p>
            </div>
        </div>
    )
}