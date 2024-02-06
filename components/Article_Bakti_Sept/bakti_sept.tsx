import React from "react";
import blood from "@/public/image/article/2/bakti.jpg"
import Image from "next/image"

export default function Article1() {
    return (
        <div className="flex flex-col justify-center items-center bg-greyblub w-screen h-[3000px] font-montserrat pt-[156px] pb-[30px] max-lg:px-[5%]">
            <h1 className="max-w-[1000px] text-center mb-[45px] font-semibold text-[35px] max-lg:px-[5%]">Kerja Bakti: Tanggung Jawab Sosial Perusahaan dalam Menjaga Lingkungan bersih</h1>
            <div className="flex">
              <div className="bg-redblub w-[100px] h-[20px]"></div>
              <div className="bg-blueblub w-[100px] h-[20px]"></div>
            </div>
            
            <div className="flex flex-col max-w-[1000px] gap-y-[30px] justify-around items-center font-montserrat font-normal text-justify text-[20px] mt-[50px] indent-16">
                <p>
                Dalam era modern ini, kesadaran akan pentingnya menjaga lingkungan semakin meningkat. Bukan hanya tanggung jawab pemerintah, tetapi juga menjadi tanggung jawab sosial perusahaan untuk berkontribusi dalam memelihara kebersihan dan kelestarian lingkungan. Salah satu upaya nyata yang dilakukan adalah melalui kerja bakti untuk membersihkan area sekitar.</p>
                <Image src={blood} alt="headline" width={800} height={480}></Image>
                <p>
                Membersihkan area lingkungan adalah tindakan konkret yang membawa dampak positif pada berbagai aspek kehidupan. Kebersihan lingkungan mencegah pencemaran yang dapat membahayakan kesehatan manusia dan keberlangsungan ekosistem. Selain itu, lingkungan yang bersih juga berkontribusi pada kesehatan masyarakat dengan mengurangi risiko terkena penyakit yang disebabkan oleh kotoran dan limbah. Area yang terjaga kebersihannya memungkinkan kehidupan berbagai jenis flora dan fauna, mendukung keberlangsungan ekosistem, serta mempertahankan keanekaragaman hayati. Melalui kerja bakti, perusahaan turut serta dalam membangun kesadaran dan semangat peduli lingkungan di antara karyawan dan masyarakat sekitar.
                </p>
                <p>
                Kerja bakti untuk membersihkan area lingkungan adalah contoh nyata dari bagaimana perusahaan dapat melaksanakan tanggung jawab sosialnya terhadap lingkungan. Tindakan ini bukan hanya membawa manfaat positif bagi alam, tetapi juga memperkuat hubungan antara perusahaan dan masyarakat sekitar. Dengan berkontribusi dalam menjaga kebersihan lingkungan, perusahaan turut berperan dalam menciptakan masa depan yang lebih hijau dan berkelanjutan bagi semua pihak.
                </p>
            </div>
        </div>
    )
}