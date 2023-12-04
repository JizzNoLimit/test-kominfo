import Image from "next/image"
import banner from '@/assets/hero-banner.png'

const HeroSection = () => {
    return (
        <div className="relative w-[100vw-1px] h-[700px]">
            <Image 
                src={banner} 
                fill
                className="absolute object-cover object-center"
                alt="Dinas Koperi & UMKM" 
            />
            <div className="absolute inset-x-0 bottom-0 w-full h-[60%] bg-gradient-to-t from-[rgba(0,0,0,0.80)] to-[rgba(0,0,0,0)]"></div>
            <div className="w-full h-full px-[168px]">
                <div className="absolute bottom-[59px] text-font-white">
                    <h1 className="text-[52px] font-bold">Dinas Koperasi & UMKM</h1>
                    <p className="text-lg">Dinas Koperasi dan Usaha Kecil Menengah</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection