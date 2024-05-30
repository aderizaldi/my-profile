"use client";

import { title, subtitle } from "@/components/primitives";
import { Card, Image } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { SectionContext } from "@/contexts/SectionContext";

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
  const { profilRef, keterampilanRef, pengalamanRef, proyekRef, kontakRef } =
    context;

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2" id="home">
        <div className="py-8 md:py-10 w-full flex flex-col justify-center text-center md:text-start order-2 md:order-1 min-h-[40vh] md:min-h-[80vh]">
          <h2 className={subtitle()}>
            Halo, saya <strong>Ade Rizaldi</strong>
          </h2>
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
          <h2 className={subtitle()}></h2>
        </div>
        <div className="py-10 w-full flex flex-row order-1 md:order-2 min-h-[40vh] md:min-h-[80vh] justify-center items-center">
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
            <Card radius="sm" className="w-[350px] border-none shadow-none">
              <Image
                removeWrapper
                className="z-0 w-full object-cover"
                src="/me.jpeg"
                alt="Ade Rizaldi"
                radius="none"
              />
            </Card>
          </motion.div>
        </div>
      </section>
      <section
        id="profil"
        className="grid grid-cols-1 pt-20 min-h-screen"
        ref={profilRef}
      >
        <h1
          className={title({
            color: "red",
            size: "sm",
            class: "col-span-12 text-center",
          })}
        >
          Profil
        </h1>
      </section>
      <section
        id="keterampilan"
        className="grid grid-cols-1 pt-20 min-h-screen"
        ref={keterampilanRef}
      >
        <h1
          className={title({
            color: "red",
            size: "sm",
            class: "col-span-12 text-center",
          })}
        >
          Keterampilan
        </h1>
      </section>
      <section
        id="pengalaman"
        className="grid grid-cols-1 pt-20 min-h-screen"
        ref={pengalamanRef}
      >
        <h1
          className={title({
            color: "red",
            size: "sm",
            class: "col-span-12 text-center",
          })}
        >
          Pengalaman
        </h1>
      </section>
      <section
        id="proyek"
        className="grid grid-cols-1 pt-20 min-h-screen"
        ref={proyekRef}
      >
        <h1
          className={title({
            color: "red",
            size: "sm",
            class: "col-span-12 text-center",
          })}
        >
          Proyek
        </h1>
      </section>
      <section
        id="kontak"
        className="grid grid-cols-1 pt-20 min-h-screen"
        ref={kontakRef}
      >
        <h1
          className={title({
            color: "red",
            size: "sm",
            class: "col-span-12 text-center",
          })}
        >
          Kontak
        </h1>
      </section>
    </>
  );
}
