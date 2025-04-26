"use client";

import { useEffect, useState, useContext } from "react";
import { title, subtitle } from "@/components/primitives";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Chip,
  Image,
  Link,
  Input,
  Textarea,
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContext } from "@/contexts/SectionContext";
import { RevealAnimation } from "@/components/reveal-animation";
import { BiLogoInstagram, BiLogoLinkedin, BiLogoWhatsapp, BiSend, BiSolidMap, BiSolidContact, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { CardBrand } from "@/components/card";
import { brands } from "@/config/site";
import { Timeline } from "@/components/timeline";
import { Alert, AlertProps } from "@/components/alert";
import { Modal, ModalContent } from "@/components/modal";

const texts = ["Software Developer", "Backend Developer", "Fullstack Developer"];
export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const context = useContext(SectionContext);
  if (!context) {
    return null; // Handle the case where context is undefined
  }
  const { homeRef, scrollToSection, kontakRef } = context;
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2"
      id="home"
      ref={homeRef}
    >
      <div className="w-full flex flex-col justify-center items-center md:items-start order-2 md:order-1 min-h-[40vh] md:min-h-[80vh]">
        <RevealAnimation>
          <h2 className={subtitle()}>
            Halo, saya <strong>Ade Rizaldi</strong>
          </h2>
        </RevealAnimation>
        <RevealAnimation>
          <div className="my-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className={title({ color: "red", size: "lg" })}>
                  {texts[currentTextIndex]}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealAnimation>
        <RevealAnimation>
          <Button
            className="mt-3 text-white"
            radius="full"
            color="primary"
            onClick={() => scrollToSection(kontakRef)}
            startContent={<BiSolidContact size={20} />}
          >
            Hubungi Saya
          </Button>
        </RevealAnimation>
      </div>
      <div className="w-full flex flex-row order-1 md:order-2 min-h-[40vh] md:min-h-[80vh] justify-center items-center">
        <RevealAnimation>
          <motion.div
            animate={{
              y: [0, -10, 0], // Defines the keyframes for vertical movement
            }}
            transition={{
              duration: 2, // Total duration for one cycle of the animation
              ease: "easeInOut", // Easing function
              repeat: Infinity, // Loop the animation indefinitely
              repeatType: "mirror", // Alternate direction on each repeat
            }}
          >
            <Card
              radius="sm"
              className="my-3 w-[350px]"
            >
              <Image
                removeWrapper
                className="z-0 w-full object-cover object-center"
                src="/me.jpeg"
                alt="Ade Rizaldi"
                radius="sm"
              />
            </Card>
          </motion.div>
        </RevealAnimation>
      </div>
    </section>
  )
}

export const Profil = () => {
  const context = useContext(SectionContext);
  if (!context) {
    return null; // Handle the case where context is undefined
  }
  const { profilRef } = context;
  return (
    <section
      id="profil"
      className="pt-20 min-h-[90vh] w-full"
      ref={profilRef}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <RevealAnimation>
          <h1 className="text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
            <span className="text-primary">/</span>profil
          </h1>
        </RevealAnimation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 py-3 md:py-8 gap-5 md:gap-8 w-full">
        {/* Tentang Saya */}
        <div className="flex flex-col items-center md:items-start">
          <RevealAnimation>
            <div className="w-full flex flex-col py-3">
              <h2 className="text-lg font-bold text-default-600 block subpixel-antialiased">
                Tentang Saya<span className="text-primary">.</span>
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation>
            <p className="text-default-600 text-justify">
              Dengan antusiasme yang besar, saya menggeluti dunia pengembangan
              perangkat lunak, khususnya sebagai backend developer. Keahlian
              saya tidak hanya terbatas pada pembuatan aplikasi yang inovatif,
              tetapi juga dalam pemeliharaan server yang efesien. Saya dikenal
              dengan kemampuan belajar yang cepat, memungkinkan saya untuk
              menguasai teknologi atau metode baru dengan mudah dan efektif.
              Kesigapan ini merupakan aset penting dalam menyesuaikan diri
              dengan perkembangan terkini di industri teknologi informasi.
            </p>
          </RevealAnimation>
        </div>

        {/* Pendidikan */}
        <div className="flex flex-col items-center md:items-start">
          <RevealAnimation>
            <div className="w-full flex flex-col py-3">
              <h2 className="text-lg font-bold text-default-600 block subpixel-antialiased">
                Pendidikan<span className="text-primary">.</span>
              </h2>
            </div>
          </RevealAnimation>
          <div className="w-full flex flex-col gap-3">
            <RevealAnimation width="w-full">
              <Card fullWidth isHoverable>
                <CardHeader className="flex flex-col justify-start items-start">
                  <h2 className="text-md font-bold text-default-600 block subpixel-antialiased">
                    SMK Negeri 2 Singkawang
                  </h2>
                  <p className="text-xs font-light text-default-600 block subpixel-antialiased">
                    Juni 2016 - Mei 2019
                  </p>
                </CardHeader>
                <CardBody className="flex flex-row justify-start items-center gap-2 flex-wrap">
                  <Chip
                    variant="solid"
                    color="primary"
                    className="text-white"
                  >
                    Jurusan Multimedia
                  </Chip>
                  <Chip
                    variant="dot"
                    color="primary"
                    startContent={<BiSolidMap color="#D80032" />}
                  >
                    Singkawang, Indonesia
                  </Chip>
                </CardBody>
              </Card>
            </RevealAnimation>
            <RevealAnimation width="w-full">
              <Card fullWidth isHoverable>
                <CardHeader className="flex flex-col justify-start items-start">
                  <h2 className="text-md font-bold text-default-600 block subpixel-antialiased">
                    Universitas Tanjungpura
                  </h2>
                  <p className="text-xs font-light text-default-600 block subpixel-antialiased">
                    Agustus 2019 - Desember 2023
                  </p>
                </CardHeader>
                <CardBody className="flex flex-row justify-start items-center gap-2 flex-wrap">
                  <Chip
                    variant="solid"
                    color="primary"
                    className="text-white"
                  >
                    Jurusan Informatika
                  </Chip>
                  <Chip variant="dot" color="primary">
                    IPK 3.88
                  </Chip>
                  <Chip
                    variant="dot"
                    color="primary"
                    startContent={<BiSolidMap color="#D80032" />}
                  >
                    Pontianak, Indonesia
                  </Chip>
                </CardBody>
              </Card>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Pengalaman = () => {
  const context = useContext(SectionContext);
  if (!context) {
    return null; // Handle the case where context is undefined
  }
  const { pengalamanRef } = context;
  return (
    <section
      id="pengalaman"
      className="pt-20 min-h-[90vh] w-full"
      ref={pengalamanRef}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <RevealAnimation>
          <h1 className="text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
            <span className="text-primary">/</span>pengalaman
          </h1>
        </RevealAnimation>
      </div>
      <div className="grid grid-cols-1 py-3 md:py-8 gap-5 md:gap-8 w-full">
        <Timeline />
      </div>
    </section>
  );
}

export const Proyek = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalContent, setModalContent] = useState<ModalContent>({
    title: "",
  });
  const [showAll, setShowAll] = useState(false);
  const context = useContext(SectionContext);
  if (!context) {
    return null; // Handle the case where context is undefined
  }
  const { proyekRef } = context;

  const openModal = (content: ModalContent) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const list = [
    {
      "title": "Vocasia Backend",
      "description": "Pengembangan sistem backend untuk platform Vocasia dengan fokus pada performa API, optimasi database, dan implementasi logika bisnis yang efisien untuk mendukung aplikasi frontend.",
      "category": "Pengembangan Backend",
      "tools": "Node.js, Express, MongoDB, Docker",
      "link": "",
      "images": []
    },
    {
      "title": "BLiving Backend",
      "description": "Perancangan infrastruktur backend untuk solusi BLiving Smart Home yang mengedepankan keamanan dan kestabilan komunikasi antara perangkat IoT dengan aplikasi pengguna.",
      "category": "Pengembangan Backend",
      "tools": "Python, Django, PostgreSQL, Redis",
      "link": "",
      "images": []
    },
    {
      "title": "Website PT Grha Digital Indonesia",
      "description": "Pengembangan website korporat modern untuk PT Grha Digital Indonesia yang menonjolkan nilai perusahaan dan portofolio, dengan antarmuka yang responsif dan mudah dikelola.",
      "category": "Pengembangan Web",
      "tools": "Next.js, React, Tailwind CSS",
      "link": "https://grhadigital.id",
      "images": []
    },
    {
      "title": "Smarthome Gateway for BLiving",
      "description": "Implementasi sistem gateway untuk ekosistem smart home BLiving yang memungkinkan integrasi berbagai perangkat pintar dan manajemen terpusat untuk pengguna.",
      "category": "Pengembangan IoT",
      "tools": "Embedded Systems, MQTT, Node.js, C++",
      "link": "",
      "images": []
    },
    {
      "title": "Website PT Umar",
      "description": "Website untuk PT Umar yang bergerak di bidang properti, menampilkan lokasi setiap properti beserta sitemapnya untuk memudahkan calon pelanggan dalam mendapatkan informasi.",
      "category": "Pengembangan Web",
      "tools": "Next.js, React, Tailwind CSS",
      "link": "https://sahabatsyariah.co.id",
      "images": []
    },
    {
      "title": "Sistem Manajemen Proyek Pekerja Borongan (Borovite)",
      "description": "Pengembangan aplikasi manajemen pekerja borongan yang memudahkan alokasi tenaga kerja, monitoring progres, dan transparansi pembayaran untuk meningkatkan efisiensi operasional.",
      "category": "Perangkat Lunak Perusahaan",
      "tools": "React, Node.js, MySQL, Redux",
      "link": "",
      "images": []
    },
    {
      "title": "ECommerce Buda Arta Maju - Anggrek Dewata",
      "description": "Pengembangan platform e-commerce untuk UMKM Buda Arta Maju yang menjual berbagai olahan jeruk, dilengkapi dengan fitur pencarian cerdas dan sistem pembayaran yang terintegrasi.",
      "category": "E-Commerce",
      "tools": "React, Next.js, Node.js, MongoDB",
      "link": "https://anggrekdewata.com",
      "images": []
    },
    {
      "title": "Sistem Informasi Tata Ruang (SIMTARU) Kab. Mempawah",
      "description": "Pengembangan sistem informasi geografis untuk perencanaan tata ruang Kabupaten Mempawah yang memudahkan akses dan visualisasi data penggunaan lahan untuk publik dan pemangku kepentingan.",
      "category": "Aplikasi GIS",
      "tools": "React, Node.js, PostgreSQL, PostGIS, Leaflet",
      "link": "https://simtaruv2.mempawahkab.com",
      "images": []
    },
    {
      "title": "Website My Agro",
      "description": "Perancangan platform digital pertanian My Agro yang menghubungkan petani dengan informasi, layanan, dan sumber daya untuk meningkatkan produktivitas dan pengetahuan di bidang agrikultur.",
      "category": "Pengembangan Web",
      "tools": "React, Next.js, Tailwind CSS",
      "link": "https://myagro.id",
      "images": []
    },
    {
      "title": "Website Dies Natalies Untan",
      "description": "Pembuatan website perayaan ulang tahun Universitas Tanjungpura dengan tampilan menarik dan fitur komprehensif untuk menampilkan agenda acara, dokumentasi kegiatan, dan konten perayaan.",
      "category": "Pengembangan Web",
      "tools": "Next.js, React, Tailwind CSS",
      "link": "https://diesnatalis.untan.ac.id",
      "images": []
    },
    {
      "title": "Website Monitoring Unit Centre BWSK",
      "description": "Pengembangan website monitoring yang menyediakan berbagai informasi seperti curah hujan, duga air, CCTV, dan data lainnya untuk mendukung pengawasan dan pengambilan keputusan.",
      "category": "Aplikasi Web",
      "tools": "React, Node.js, Express, MongoDB, D3.js",
      "link": "",
      "images": []
    },
    {
      "title": "QROP Spasial Kota Pontianak",
      "description": "Website untuk mendata wajib pajak perorangan ataupun perusahaan di Kota Pontianak, dengan integrasi teknologi GIS untuk mempermudah pengelolaan dan visualisasi data.",
      "category": "Aplikasi GIS",
      "tools": "React, Python, Django, PostgreSQL, PostGIS",
      "link": "",
      "images": []
    },
    {
      "title": "Geoportal Landak",
      "description": "Pengembangan portal geografis untuk Kabupaten Landak yang menyediakan akses mudah terhadap informasi spasial dan peta digital untuk mendukung pengambilan keputusan berbasis lokasi.",
      "category": "Aplikasi GIS",
      "tools": "React, Node.js, PostgreSQL, PostGIS, GeoServer",
      "link": "",
      "images": []
    },
    {
      "title": "Sistem Pengelolaan Rapat Fakultas Teknik Untan",
      "description": "Perancangan sistem digital untuk manajemen rapat di Fakultas Teknik Untan yang mengoptimalkan penjadwalan, dokumentasi, dan tindak lanjut hasil rapat secara terpadu.",
      "category": "Perangkat Lunak Perusahaan",
      "tools": "React, Node.js, Express, MySQL",
      "link": "",
      "images": []
    },
    {
      "title": "Website Pengaduan Fakultas Teknik Untan",
      "description": "Pengembangan platform pengaduan online untuk Fakultas Teknik Untan yang memfasilitasi komunikasi efektif antara mahasiswa dan fakultas dengan fitur pelacakan status dan respons.",
      "category": "Aplikasi Web",
      "tools": "React, Node.js, Express, MySQL",
      "link": "",
      "images": []
    },
    {
      "title": "Sistem Pengelolaan Ruangan Fakultas Teknik Untan",
      "description": "Implementasi sistem reservasi dan manajemen ruangan digital untuk Fakultas Teknik Untan yang meningkatkan efisiensi penggunaan fasilitas dan mengurangi konflik jadwal.",
      "category": "Perangkat Lunak Perusahaan",
      "tools": "React, Node.js, Express, MySQL",
      "link": "",
      "images": []
    },
    {
      "title": "Ruwavicta",
      "description": "Website yang menampilkan jualan produk skincare dengan desain modern dan fitur yang memudahkan pelanggan untuk menjelajahi produk.",
      "category": "E-Commerce",
      "tools": "React, Node.js, MongoDB, Docker",
      "link": "",
      "images": []
    },
    {
      "title": "Smart Taruna",
      "description": "Aplikasi ujian atau try out untuk belajar latihan tes masuk CPNS dan sekolah kedinasan, dengan fitur evaluasi hasil dan rekomendasi peningkatan.",
      "category": "Teknologi Pendidikan",
      "tools": "Next.js, Firebase, React Native",
      "link": "",
      "images": []
    }
  ];

  const displayedProjects = showAll ? list.reverse() : list.reverse().slice(0, 8);

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      id="proyek"
      className="pt-20 min-h-[90vh] w-full"
      ref={proyekRef}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <RevealAnimation>
          <h1 className="text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
            <span className="text-primary">/</span>proyek
          </h1>
        </RevealAnimation>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 md:py-8 gap-5 md:gap-8 w-full">
        {displayedProjects.map((item, index) => (
          /* eslint-disable no-console */
          <RevealAnimation width="w-full" key={index}>
            <Card className="w-full" key={index} isPressable shadow="sm" onPress={() => openModal(item as unknown as ModalContent)}>
              <CardBody className="w-full p-0">
                <Image
                  isZoomed
                  alt={item.title}
                  className="w-full object-cover h-[200px]"
                  radius="lg"
                  shadow="sm"
                  src={item.images && item.images.length > 0 ? item.images[0] : "/img/default.jpg"}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small justify-center h-16">
                <b className="font-semibold line-clamp-2">{item.title}</b>
              </CardFooter>
            </Card>
          </RevealAnimation>
        ))}
      </div>

      {list.length > 8 && (
        <div className="w-full flex justify-center">
          {showAll ? (
            <RevealAnimation>
              <Button
                color="primary"
                variant="light"
                onPress={toggleShowMore}
                className="font-medium"
                startContent={<BiChevronUp size={20} />}
              >
                Sembunyikan
              </Button>
            </RevealAnimation>
          ) : (
            <RevealAnimation>
              <Button
                color="primary"
                variant="light"
                onPress={toggleShowMore}
                className="font-medium"
                startContent={<BiChevronDown size={20} />}
              >
                Selengkapnya
              </Button>
            </RevealAnimation>
          )}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} content={ModalContent} />
    </section>
  );
}

export const Keterampilan = () => {
  const context = useContext(SectionContext);
  if (!context) {
    return null; // Handle the case where context is undefined
  }
  const { keterampilanRef } = context;
  return (
    <section
      id="keterampilan"
      className="pt-20 min-h-[90vh] w-full"
      ref={keterampilanRef}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <RevealAnimation>
          <h1 className="text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
            <span className="text-primary">/</span>Keterampilan
          </h1>
        </RevealAnimation>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 py-3 md:py-8 gap-5 md:gap-8 w-full">
        <div className="flex flex-col items-center md:items-start order-2 lg:order-1">
          <RevealAnimation>
            <div className="w-full flex flex-col py-3">
              <h2 className="text-lg font-bold text-default-600 block subpixel-antialiased">
                Tools<span className="text-primary">.</span>
              </h2>
            </div>
          </RevealAnimation>
          <div className="w-full flex flex-col">
            <RevealAnimation>
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 w-full">
                {brands.map((brand) => {
                  return (
                    <CardBrand
                      key={brand.name}
                      name={brand.name}
                      image={brand.image}
                    />
                  );
                })}
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start order-1 lg:order-2">
          <RevealAnimation>
            <div className="w-full flex flex-col py-3">
              <h2 className="text-lg font-bold text-default-600 block subpixel-antialiased">
                Soft Skills<span className="text-primary">.</span>
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation>
            <div className="w-full">
              <ul className="list-disc list-outside text-sm ps-3">
                <li className="text-primary font-bold text-justify">
                  Problem Solving:{" "}
                  <span className="text-default-600 font-normal">
                    Kemampuan untuk menganalisis masalah kompleks dan
                    menemukan solusi.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Communication:{" "}
                  <span className="text-default-600 font-normal">
                    Kemampuan untuk berkomunikasi dengan baik, baik secara
                    lisan maupun tulisan, untuk berkolaborasi dengan tim,
                    menjelaskan masalah teknis kepada non-teknisi, dan menulis
                    dokumentasi yang jelas.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Time Management:{" "}
                  <span className="text-default-600 font-normal">
                    Kemampuan untuk mengelola waktu, termasuk pengaturan
                    prioritas tugas dan penyelesaian proyek tepat waktu.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Adaptability:{" "}
                  <span className="text-default-600 font-normal">
                    Fleksibilitas untuk belajar dan beradaptasi dengan
                    teknologi baru, alat, dan metodologi pengembangan.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Teamwork:{" "}
                  <span className="text-default-600 font-normal">
                    Kemampuan untuk bekerja secara kolaboratif dalam tim, baik
                    dalam peran sebagai anggota tim maupun sebagai pemimpin.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Attention to Detail:{" "}
                  <span className="text-default-600 font-normal">
                    Ketelitian dalam menulis kode, debugging, dan melakukan
                    pengujian untuk memastikan kualitas dari produk yang
                    dihasilkan.
                  </span>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation>
            <div className="w-full flex flex-col py-3 mt-3">
              <h2 className="text-lg font-bold text-default-600 block subpixel-antialiased">
                Hard Skills<span className="text-primary">.</span>
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation>
            <div className="w-full ps-3">
              <ul className="list-disc list-outside text-sm">
                <li className="text-primary font-bold text-justify">
                  Programming Languages:{" "}
                  <span className="text-default-600 font-normal">
                    Pemahaman tentang bahasa pemrograman seperti Javascript,
                    Typescript, PHP, dan Lainnya.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Database Management:{" "}
                  <span className="text-default-600 font-normal">
                    Kemampuan untuk merancang, mengimplementasikan, dan
                    mengelola database relasional (seperti MySQL, PostgreSQL)
                    dan non-relasional (seperti MongoDB, Redis).
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  API Development:{" "}
                  <span className="text-default-600 font-normal">
                    Pengalaman dalam membuat dan mengelola RESTful API.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Server Management:{" "}
                  <span className="text-default-600 font-normal">
                    Pengetahuan tentang pengaturan dan pengelolaan server,
                    termasuk penggunaan server seperti Apache, Nginx, atau
                    layanan cloud seperti AWS, dan Google Cloud.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Version Control:{" "}
                  <span className="text-default-600 font-normal">
                    Penguasaan alat version control seperti Git untuk
                    manajemen kode dan kolaborasi tim.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Security Best Practices:{" "}
                  <span className="text-default-600 font-normal">
                    Pemahaman tentang prinsip-prinsip keamanan dalam
                    pengembangan perangkat lunak.
                  </span>
                </li>
                <li className="text-primary font-bold text-justify">
                  Testing:{" "}
                  <span className="text-default-600 font-normal">
                    Kemampuan untuk menulis dan menjalankan unit tests,
                    integration tests, dan end-to-end tests untuk memastikan
                    kode bekerja sebagaimana mestinya.
                  </span>
                </li>
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}

export const Kontak = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const context = useContext(SectionContext);
  if (!context) {
    return null; // Handle the case where context is undefined
  }
  const { kontakRef } = context;

  const handleSendForm = () => {
    if (!nama || !email || !pesan) {
      setAlert({ type: 'error', message: 'Nama, email, dan pesan tidak boleh kosong.' });
      return;
    }
    const mailtoLink = `mailto:ade.rizaldi.mm2@gmail.com?subject=Kontak dari ${nama}&body=${encodeURIComponent(pesan)}%0D%0A%0D%0AEmail: ${email}`;
    window.location.href = mailtoLink;
    setAlert({ type: 'success', message: 'Terima kasih :D' });
  };

  const handleResetForm = () => {
    setNama('');
    setEmail('');
    setPesan('');
    setAlert(null);
  };

  return (
    <section
      id="kontak"
      className="pt-20 min-h-[90vh] w-full"
      ref={kontakRef}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <RevealAnimation>
          <h1 className="text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
            <span className="text-primary">/</span>kontak
          </h1>
        </RevealAnimation>
      </div>

      <div className="grid grid-cols-1 py-3 md:py-8 gap-5 md:gap-8 w-full place-items-center">
        <div className="w-full lg:w-3/4">
          <RevealAnimation width="w-full">
            <Card fullWidth className="p-8">
              <div className="flex flex-col flex-wrap gap-8">
                <div className="text-center">
                  <h2 className="text-lg font-bold text-default-600 block subpixel-antialiased">
                    <span className="text-primary">Hubungi</span> saya untuk berdiskusi lebih lanjut<span className="text-primary">.</span>
                  </h2>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <Button
                    isIconOnly
                    radius="full"
                    as={Link}
                    href="https://wa.me/6282158155347"
                    target="_blank"
                    size="lg"
                  >
                    <BiLogoWhatsapp size={24} />
                  </Button>
                  <Button
                    isIconOnly
                    radius="full"
                    as={Link}
                    href="https://instagram.com/ade.rizaldi"
                    target="_blank"
                    size="lg"
                  >
                    <BiLogoInstagram size={24} />
                  </Button>
                  <Button
                    isIconOnly
                    radius="full"
                    as={Link}
                    href="https://www.linkedin.com/in/aderizaldi"
                    target="_blank"
                    size="lg"
                  >
                    <BiLogoLinkedin size={24} />
                  </Button>
                </div>
                <div className="text-center">
                  <p className="text-md text-default-600 block subpixel-antialiased">
                    atau email:
                  </p>
                </div>
                <div className="flex flex-col flex-wrap gap-3">
                  {alert && <Alert type={alert.type} message={alert.message} />}
                  <Input
                    type="text"
                    label="Nama"
                    variant="bordered"
                    className="w-full"
                    onChange={(e) => setNama(e.target.value)}
                    value={nama}
                  />
                  <Input
                    type="email"
                    label="Email"
                    variant="bordered"
                    className="w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <Textarea
                    label="Pesan"
                    placeholder="Tulis pesan Anda di sini..."
                    variant="bordered"
                    className="max-full"
                    minRows={8}
                    onChange={(e) => setPesan(e.target.value)}
                    value={pesan}
                  />
                  <div className="w-full flex flex-row justify-end gap-2">
                    <Button
                      className="mt-3"
                      variant="bordered"
                      onClick={handleResetForm}
                    >
                      Reset
                    </Button>
                    <Button
                      className="mt-3 text-white"
                      color="primary"
                      startContent={<BiSend size={20} />}
                      onClick={handleSendForm}
                    >
                      Kirim Email
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}