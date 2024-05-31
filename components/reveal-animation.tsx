"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "w-fit" | "w-full";
}

export const RevealAnimation = ({ children, width = "w-fit" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${width} `}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        <div className="p-1 w-full">{children}</div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="absolute top-4 bottom-4 left-0 right-0 z-50 bg-[#D80032]"
      />
    </div>
  );
};
