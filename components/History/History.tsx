import Image from "next/image"
import logo from "@/public/image/history/White Clean Writing.png"

export default function Profile() {
    return(
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blueblub to-redblub w-screen h-[1300px] font-montserrat text-[white] pt-[100px] pb-[100px]">
            <h1 className="text-[35px] font-semibold text-center max-lg:px-[5%]">Tujuan Terbentuknya Panca Budi Foundation</h1>
            <div className="max-w-[1500px] flex items-center justify-center pt-[50px] gap-x-[50px] max-lg:flex-col">
                <Image className="max-lg:px-[5%]" src={logo} alt="logo" width={400} height={400}></Image>
                <div className="flex flex-col font-montserrat max-lg:mt-[30px]">
                    <p className="max-w-[480px] font-normal text-[18px] text-left max-lg:text-center max-lg:px-[5%]">Panca Budi Foundation ingin ikut serta dalam mengatasi masalah sosial dan kemanusiaan di mulai dari hal-hal kecil dan secara bertahap ketingkat yang lebih besar sesuai dengan batas kemampuan. Yayasan ini mengajak dan menyadarkan kepada seluruh jajaran pimpinan, staf dan karyawan dalam keluarga besar Panca Budi bahwa ditengah-tengah kesibukan bekerja mencari nafkah, kita perlu meluangkan sedikit waktu untuk melakukan upaya kepedulian sosial dan kemanusiaan terhadap sesama khususnya terhadap masyarakat sekitar.</p>
                </div>
            </div>
        </div>
    )
}