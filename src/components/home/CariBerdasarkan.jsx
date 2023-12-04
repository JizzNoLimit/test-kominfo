import agenda_pelatihan from '@/assets/agenda-pelatihan.png'
import pendataan_umkm from '@/assets/pendataan-umkm.png'
import pendataan_koperasi from '@/assets/pendataan-koperasi.png'
import galeri from '@/assets/galeri.png'
import konsultasi_umkm from '@/assets/konsultasi-umkm.png'
import konsultasi_klinik_koperasi from '@/assets/konsultasi-klinik-koperasi.png'
import Image from 'next/image'

const datas = [
    {
        img: agenda_pelatihan,
        title: "Agenda Pelatihan"
    },
    {
        img: pendataan_umkm,
        title: "Pendataan UMKM"
    },
    {
        img: pendataan_koperasi,
        title: "Pendataan Koperasi"
    },
    {
        img: galeri,
        title: "Galeri"
    },
    {
        img: konsultasi_umkm,
        title: "Konsultasi UMKM"
    },
    {
        img: konsultasi_klinik_koperasi,
        title: "Konsultasi Klinik Koperasi"
    },
]

const CariBerdasarkan = () => {
    return (
        <div className='relative w-full h-full py-20 px-[168px]'>
            <h3 className='text-[28px] font-bold text-center text-font-primary-black'> Cari Berdasarkan</h3>
            <div className='flex justify-between mt-[50px]'>
                {datas.map((data, index) => (
                    <div key={index} className='w-[140px] h-auto'>
                        <div>
                            <Image 
                                src={data.img}
                                width={140}
                                height={140}
                                alt={data?.title} 
                            />
                        </div>
                        <p className='text-xl text-center text-font-secondary-black'>{data?.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CariBerdasarkan