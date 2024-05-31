"use client";

import { title, subtitle } from "@/components/primitives";
import { Button, Card, Image, Link } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { SectionContext } from "@/contexts/SectionContext";
import { RevealAnimation } from "@/components/reveal-animation";
import { BiFile } from "react-icons/bi";

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

      <section
        id="profil"
        className="pt-20 min-h-screen w-full"
        ref={profilRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-3 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>profil
            </h1>
          </RevealAnimation>
        </div>
      </section>

      <section
        id="keterampilan"
        className="pt-20 min-h-screen w-full"
        ref={keterampilanRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-3 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>keterampilan
            </h1>
          </RevealAnimation>
        </div>
      </section>

      <section
        id="pengalaman"
        className="pt-20 min-h-screen w-full"
        ref={pengalamanRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-3 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>pengalaman
            </h1>
          </RevealAnimation>
        </div>
      </section>

      <section
        id="proyek"
        className="pt-20 min-h-screen w-full"
        ref={proyekRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-3 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>proyek
            </h1>
          </RevealAnimation>
        </div>
      </section>

      <section
        id="kontak"
        className="pt-20 min-h-screen w-full"
        ref={kontakRef}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <RevealAnimation>
            <h1 className="py-3 text-2xl lg:text-3xl font-bold text-default-600 block subpixel-antialiased">
              <span className="text-primary">/</span>kontak
            </h1>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
