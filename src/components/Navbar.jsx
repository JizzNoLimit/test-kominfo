import logo_kota_palembang from "@/assets/logo-kota-palembang.png";
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full h-full py-6 px-[168px] z-50 bg-[#fff]">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-4">
                    <Image 
                        src={logo_kota_palembang}
                        width={46}
                        height={59}
                        className="w-[46px] h-[59px]"
                        alt="logo kota palembang"
                    />
                    <div className="flex flex-col justify-center">
                        <span className="font-semibold text-base text-font-blue">Koperasi</span>
                        <span className="text-sm text-[#121313]">Kota Palembag</span>
                    </div>
                </div>
                <ul className="flex gap-10 text-font-secondary-black">
                    <li>Beranda</li>
                    <li>Profile</li>
                    <li>Berita</li>
                    <li>Bidang</li>
                    <li>Galeri</li>
                    <li>Survey Kepuasan</li>
                    <li>Informasi</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar