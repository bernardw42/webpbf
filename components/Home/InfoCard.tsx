// export default function infoCard() {

//     interface InfoStatsProps{
//         title:string;
//         stats:string;
//     }
    
//     function InfoStats({title, stats}:InfoStatsProps) {
//         return(
//             <div className="font-montserrat flex flex-col items-center gap-y-[10px]">
//                 <p className="font-semibold text-[55px] leading-[70px]">{stats}</p>
//                 <h1 className="text-[25px] font-normal max-w-[200px] text-center leading-[29px] ">{title}</h1>
//             </div>
//         )
//     }

//     return(
//         <div className="flex flex-col items-center">
//             <div className="absolute top-[670px] z-30 transition-opacity max-lg:hidden">
//                 <div className="bg-gradient-to-r from-blueblub to-redblub flex flex-col items-center justify-center w-[1000px] h-[275px] gap-y-[35px] opacity-0.95 drop-shadow-lg">
//                     <div className="text-[white] flex max-lg:flex-col justify-around gap-x-[130px]">
//                         <InfoStats title={'Donasi Kantung Darah'} stats={'3500+'}></InfoStats>
//                         <InfoStats title={'Pohon yang Tertanam'} stats={'18000+'}></InfoStats>
//                         <InfoStats title={'Bantuan Diberikan'} stats={'1000+'}></InfoStats>
//                     </div>
//                     <p className="font-montserrat justify-center font-thin text-[14px] text-[white] pt-[16px]">Jumlah per Tahun sesuai data 2022*</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function infoCard() {
    return (
        <div className="absolute top-[670px] z-30 max-lg:hidden">
            <div className="bg-gradient-to-r from-blueblub to-redblub flex flex-col justify-center items-center w-[1000px] h-[275px] drop-shadow-lg font-montserrat text-[white]">
                <div className="flex gap-x-[130px] justify-between text-center">
                    <div className="flex flex-col items-center max-w-[200px]">
                        <p className="text-[55px] font-semibold">3500+</p>
                        <p className="text-[25px] font-normal">Donasi Kantong Darah</p>
                    </div>
                    <div className="flex flex-col items-center max-w-[200px]">
                        <p className="text-[55px] font-semibold">18000+</p>
                        <p className="text-[25px] font-normal">Pohon Tertanam</p>
                    </div>
                    <div className="flex flex-col items-center max-w-[200px]">
                        <p className="text-[55px] font-semibold">1000+</p>
                        <p className="text-[25px] font-normal">Bantuan Diberikan</p>
                    </div>
                </div>
                <p className="font-montserrat justify-center font-thin text-[14px] text-[white] pt-[30px]">Jumlah per Tahun sesuai data 2022*</p>
            </div>
        </div>
    )
}