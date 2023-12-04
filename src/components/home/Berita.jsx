"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import Image from "next/image";
import convertTanggal from '@/lib/convertTanggal'

const Berita = ({dataBerita}) => {
    return (
        <div className="relative w-full h-auto bg-gray py-20">
            <div className="w-full px-[168px]">
                <div className="flex justify-between mb-8">
                    <h3 className="relative flex items-center gap-2 text-[32px] font-bold leading-none text-font-secondary-black">
                        <span className="inline-block w-[10px] h-[30px] bg-font-blue rounded-full"></span>
                        Berita PPKUKM
                    </h3> 
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span className="font-medium text-font-blue">Selengkapnya</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-font-blue">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={3}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {dataBerita?.data.map(data => (
                        <SwiperSlide
                            style={{position:'relative', width:'352px', height:'264px', borderRadius:'10px', overflow:'hidden'}}
                            key={data.id}
                        >
                            <Image 
                                src={`https://diskopukm.palembang.go.id${data.attributes.gambar.data.attributes.formats.thumbnail.url}`} 
                                fill
                                className="absolute object-cover object-center"
                                alt="thumnail" 
                            />
                            <div className="absolute bottom-0 p-4">
                                <h4 className="font-bold text-[18px] leading-snug line-clamp-2 text-[#fff]">{data.attributes.judul}</h4>
                                <p className="text-[16px] text-[rgba(255,255,255,.8)]">{convertTanggal(data.attributes.tanggal)}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Berita