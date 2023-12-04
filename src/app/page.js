import api from "@/api";
import Navbar from "@/components/Navbar";
import Berita from "@/components/home/Berita";
import CariBerdasarkan from "@/components/home/CariBerdasarkan";
import HeroSection from "@/components/home/HeroSection";
import SelayangPandang from "@/components/home/SelayangPandang";

async function getDataBerita() {
  try {
    const res = await api.get('/api/beritas?sort[0]=tanggal%3Adesc&pagination[pageSize]=9&populate=*')
    return res.data
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const dataBerita = await getDataBerita()
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CariBerdasarkan />
        <SelayangPandang />
        <Berita dataBerita={dataBerita} />
      </main>
    </>
  )
}
