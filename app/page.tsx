import { Hero, Keterampilan, Kontak, Pengalaman, Profil, Proyek } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Profil />
      <Pengalaman />
      <Proyek />
      <Keterampilan />
      <Kontak />
    </>
  );
}
