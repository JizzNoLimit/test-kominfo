import Image from "next/image"
import selayang_pandang from '@/assets/selayang-pandang.png'

const SelayangPandang = () => {
    return (
        <div className="relative grid grid-cols-[499px_auto] gap-[71px] items-center w-full h-auto py-20 px-[168px]">
            <div className="relative w-[499px] h-[407px] overflow-hidden">
                <Image 
                    src={selayang_pandang} 
                    fill 
                    className="absolute object-cover object-center"
                    alt="selayang pandang" 
                />
            </div>
            <div className="">
                <span className="text-font-blue">Selayang Pandang</span>
                <h1 className="text-[42px] leading-snug font-bold text-font-secondary-black">Selamat Datang di Dinas PPKUKM Kota Palembang</h1>
                <p className="text-lg leading-relaxed mt-4 text-[rgba(0,0,0,.8)]">Ida berenang di Sungai Musi<br/>
                    Selamat datang di web PPKUKM Kota Palembang<br/>
                    Semoga dapat memberikan informasi<br/>
                    Kita wujudkan visi Palembang Emas Darussalam 2023<br/>
                    "Pengelolaan Keuangan & Aset Daerah yang Akuntabel menuju Opini Laporan Keuangan WTP"</p>
            </div>
        </div>
    )
}

export default SelayangPandang