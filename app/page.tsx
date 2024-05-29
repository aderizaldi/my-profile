'use client';

import { title, subtitle } from "@/components/primitives";
import { Card, Image } from '@nextui-org/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const texts = ['Software Engineer', 'Backend Developer'];

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <section id="hero" className="grid grid-cols-1 md:grid-cols-2 min-h-100 align-middle">
        <div className="py-8 md:py-10 w-full flex flex-col justify-center text-center md:text-start order-2 md:order-1">
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
              <h1 className={title({ color: "red", size: "lg" })}>{texts[currentTextIndex]}</h1>
            </motion.div>
          </AnimatePresence>
          <h2 className={subtitle()}>
          </h2>
        </div>
        <div className="py-10 w-full justify-center flex flex-row order-1 md:order-2">
          <motion.div
            animate={{
              y: [0, -10, 0],  // Defines the keyframes for vertical movement
            }}
            transition={{
              duration: 2,  // Total duration for one cycle of the animation
              ease: "easeInOut",  // Easing function
              repeat: Infinity,  // Loop the animation indefinitely
              repeatType: "mirror",  // Alternate direction on each repeat
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
      <section id="profil"></section>
      <section id="keterampilan"></section>
      <section id="pengalaman"></section>
      <section id="proyek"></section>
      <section id="kontak"></section>
    </>
  );
}
