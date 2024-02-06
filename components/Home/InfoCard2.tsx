export default function infoCard() {
    return (
        <div className="flex flex-col justify-center items-center bg-greyblub w-screen h-[1200px] font-montserrat pt-[100px] pb-[70px] z-20 lg:hidden">
                <h1 className="max-w-[1000px] text-center mb-[40px] max-lg:px-[5%] font-semibold text-[35px] ">Bantuan Utama</h1>
                <div className="flex">
                    <div className="bg-redblub w-[100px] h-[20px]"></div>
                    <div className="bg-blueblub w-[100px] h-[20px]"></div>
                </div>
                <div className="flex flex-wrap gap-y-[30px] gap-x-[100px] justify-center text-center mt-[70px] px-4">
                    <div className="flex flex-col items-center max-w-[200px]">
                        <p className="text-[45px] font-semibold">3500+</p>
                        <p className="text-[20px] font-normal">Donasi Kantong Darah</p>
                    </div>
                    <div className="flex flex-col items-center max-w-[200px]">
                        <p className="text-[45px] font-semibold">18000+</p>
                        <p className="text-[20px] font-normal">Pohon Tertanam</p>
                    </div>
                    <div className="flex flex-col items-center max-w-[200px]">
                        <p className="text-[45px] font-semibold">1000+</p>
                        <p className="text-[20px] font-normal">Bantuan Diberikan</p>
                    </div>
                </div>
                <p className="font-montserrat justify-center font-thin text-[14px] text-[black] pt-[50px] ">Jumlah per Tahun sesuai data 2022*</p>
        </div>
    )
}