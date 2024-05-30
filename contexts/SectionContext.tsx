"use client";
import { createContext, useRef, ReactNode } from "react";

interface SectionContextType {
  profilRef: React.RefObject<HTMLDivElement>;
  keterampilanRef: React.RefObject<HTMLDivElement>;
  pengalamanRef: React.RefObject<HTMLDivElement>;
  proyekRef: React.RefObject<HTMLDivElement>;
  kontakRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
}

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);

interface SectionProviderProps {
  children: ReactNode;
}

export const SectionProvider = ({ children }: SectionProviderProps) => {
  const profilRef = useRef<HTMLDivElement>(null);
  const keterampilanRef = useRef<HTMLDivElement>(null);
  const pengalamanRef = useRef<HTMLDivElement>(null);
  const proyekRef = useRef<HTMLDivElement>(null);
  const kontakRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionContext.Provider
      value={{
        profilRef,
        keterampilanRef,
        pengalamanRef,
        proyekRef,
        kontakRef,
        scrollToSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};
