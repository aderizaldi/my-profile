"use client";

import { title, subtitle } from "@/components/primitives";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
  Link,
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { SectionContext } from "@/contexts/SectionContext";
import { RevealAnimation } from "@/components/reveal-animation";
import { BiFile, BiSolidMap, BiSolidPieChart } from "react-icons/bi";

const texts = ["Software Engineer", "Backend Developer"];

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const context = useContext(SectionContext);
  if (!context) {
    return null; // Handle the case where context is undefined
  }
  const {
    homeRef,
    profilRef,
    keterampilanRef,
    pengalamanRef,
    proyekRef,
    kontakRef,
  } = context;

  return (
    <>
      {/* Hero */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        id="home"
        ref={homeRef}
      >
        <div className="py-5 md:py-10 w-full flex flex-col justify-center items-center md:items-start order-2 md:order-1 min-h-[40vh] md:min-h-[80vh]">
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
              className="mt-3"
              radius="full"
              as={Link}
              color="primary"
              href="/cv-aderizaldi.pdf"
              download="cv-aderizaldi.pdf"
              target="_blank"
              startContent={<BiFile size={20} />}
            >
              Download CV
            </Button>
          </RevealAnimation>
        </div>
        <div className="py-5 md:py-10 w-full flex flex-row order-1 md:order-2 min-h-[40vh] md:min-h-[80vh] justify-center items-center">
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
                className="my-3 w-[350px] border-none shadow-none"
              >
                <Image
                  removeWrapper
                  className="z-0 w-full object-cover"
                  src="/me.jpeg"
                  alt="Ade Rizaldi"
                  radius="none"
                />
              </Card>
            </motion.div>
          </RevealAnimation>
        </div>
      </section>

      {/* Profil */}
      <section
        id="profil"
        className="pt-20 min-h-[90vh] w-full"
        ref={profilRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-5 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>profil
            </h1>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 py-3 md:py-10 gap-5 md:gap-10 w-full">
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
                <Card fullWidth isHoverable className="cursor-pointer">
                  <CardHeader className="flex flex-col justify-start items-start">
                    <h2 className="text-md font-bold text-default-600 block subpixel-antialiased">
                      SMK Negeri 2 Singkawang
                    </h2>
                    <p className="text-xs font-light text-default-600 block subpixel-antialiased">
                      Juni 2016 - Mei 2019
                    </p>
                  </CardHeader>
                  <CardBody className="flex flex-row justify-start items-center gap-2 flex-wrap">
                    <Chip variant="solid" color="primary">
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
                <Card fullWidth isHoverable className="cursor-pointer">
                  <CardHeader className="flex flex-col justify-start items-start">
                    <h2 className="text-md font-bold text-default-600 block subpixel-antialiased">
                      Universitas Tanjungpura
                    </h2>
                    <p className="text-xs font-light text-default-600 block subpixel-antialiased">
                      Agustus 2019 - Desember 2023
                    </p>
                  </CardHeader>
                  <CardBody className="flex flex-row justify-start items-center gap-2 flex-wrap">
                    <Chip variant="solid" color="primary">
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

      {/* Keterampilan */}
      <section
        id="keterampilan"
        className="pt-20 min-h-[90vh] w-full"
        ref={keterampilanRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-5 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>keterampilan
            </h1>
          </RevealAnimation>
        </div>
      </section>

      {/* Pengalaman */}
      <section
        id="pengalaman"
        className="pt-20 min-h-[90vh] w-full"
        ref={pengalamanRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-5 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>pengalaman
            </h1>
          </RevealAnimation>
        </div>
      </section>

      {/* Proyek */}
      <section
        id="proyek"
        className="pt-20 min-h-[90vh] w-full"
        ref={proyekRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-5 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>proyek
            </h1>
          </RevealAnimation>
        </div>
      </section>

      {/* Kontak */}
      <section
        id="kontak"
        className="pt-20 min-h-[90vh] w-full"
        ref={kontakRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-5 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>kontak
            </h1>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
