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
import { BiFile, BiLogoInstagram, BiLogoLinkedin, BiLogoWhatsapp, BiSend, BiSolidMap, BiSolidContact } from "react-icons/bi";
import { CardBrand } from "@/components/card";
import { brands } from "@/config/site";
import { Timeline } from "@/components/timeline";
import { Alert, AlertProps } from "@/components/alert";
import { Modal } from "./modal";

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

type ModalContent = {
  title: string
  description?: string
  features?: string
  link?: string
}

export const Proyek = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalContent, setModalContent] = useState<ModalContent>({
    title: "",
    description: "",
    features: "",
    link: "",
  });
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
      title: "Orange",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/img/default.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/img/default.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/img/default.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/img/default.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/img/default.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/img/default.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/img/default.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/img/default.jpg",
      price: "$12.20",
    },
  ];
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
        {list.toReversed().map((item, index) => (
          /* eslint-disable no-console */
          <RevealAnimation key={index}>
            <Card key={index} isPressable shadow="sm" onPress={() => openModal({ title: item.title, description: item.description })}>
              <CardBody className="overflow-visible p-0">
                <Image
                  isZoomed
                  alt={item.title}
                  className="w-full object-cover h-[200px]"
                  radius="lg"
                  shadow="sm"
                  src={item.img}
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