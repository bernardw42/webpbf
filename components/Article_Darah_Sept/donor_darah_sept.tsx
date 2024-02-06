import React from "react";
import blood from "@/public/image/article/1/blood.jpg"
import Image from "next/image"

export default function Article1() {
    return (
        <div className="flex flex-col justify-center items-center bg-greyblub w-screen h-[3000px] font-montserrat pt-[156px] pb-[30px] max-lg:px-[5%]">
            <h1 className="max-w-[1000px] text-center mb-[45px] font-semibold text-[35px] max-lg:px-[5%]">Menyelamatkan Nyawa: Donor Darah Rutin sebagai Inisiatif Tanggung Jawab Sosial Perusahaan</h1>
            <div className="flex">
              <div className="bg-redblub w-[100px] h-[20px]"></div>
              <div className="bg-blueblub w-[100px] h-[20px]"></div>
            </div>
            <div className="flex flex-col max-w-[1000px] gap-y-[30px] justify-around items-center font-montserrat font-normal text-justify text-[20px] mt-[50px] indent-16">
                <p>
                Di tengah kehidupan modern yang penuh dengan hiruk-pikuk aktivitas, seringkali kita lupa akan kepentingan sederhana namun vital: menyelamatkan 
                nyawa. Dalam semangat tanggung Jawab sosial perusahaan, Panca Budi Foundation telah mengadopsi inisiatif donor darah rutin untuk kembali diadakan 
                pada bulan September tahun 2023 sebagai komitmen untuk memberikan dampak positif kepada masyarakat sekitar. Hingga saat ini, inisiatif ini telah 
                mengumpulkan tidak kurang dari 345 kantong darah, menyelamatkan ratusan nyawa.</p>
                <Image src={blood} alt="headline" width={800} height={480}></Image>
                <p>
                Dengan menyelamatkan nyawa melalui penghimpunan kantong darah, Panca Budi Foundation turut berperan penting dalam mengatasi kekurangan pasokan darah yang 
                sering terjadi di rumah sakit dan pusat kesehatan melalui program donor darah rutin kami. Tidak hanya itu, donor darah juga memberikan manfaat kesehatan 
                kepada pesertanya dengan membantu memperbarui dan meregenerasi sel darah, yang pada gilirannya dapat meningkatkan sistem kekebalan tubuh. Dengan demikian, 
                Panca Budi Foundation tidak hanya menjadi jembatan penyelamat bagi pasien, tetapi juga pilar penting dalam memastikan ketersediaan darah yang memadai untuk 
                kebutuhan medis mendesak.
                </p>
                <p>
                Donor darah rutin adalah contoh nyata bagaimana kegiatan tanggung jawab sosial perusahaan dapat memiliki dampak yang besar terhadap masyarakat. Melalui 
                upaya kolektif dari karyawan dan manajemen Panca Budi, tidak kurang dari 345 kantong darah telah disumbangkan selama bulan September, memberikan harapan 
                hidup kepada ratusan orang yang membutuhkan. Semoga inisiatif ini terus mengilhami perusahaan lain untuk melakukan kebaikan serupa dan menyelamatkan lebih 
                banyak nyawa di masa mendatang.
                </p>
            </div>
        </div>
    )
}