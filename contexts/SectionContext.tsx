"use client";
import { createContext, useRef, ReactNode, useState, useEffect } from "react";

interface SectionContextType {
  homeRef: React.RefObject<HTMLDivElement>;
  profilRef: React.RefObject<HTMLDivElement>;
  pengalamanRef: React.RefObject<HTMLDivElement>;
  proyekRef: React.RefObject<HTMLDivElement>;
  keterampilanRef: React.RefObject<HTMLDivElement>;
  kontakRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  activeSection: string;
}

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);

interface SectionProviderProps {
  children: ReactNode;
}

export const SectionProvider = ({ children }: SectionProviderProps) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const profilRef = useRef<HTMLDivElement>(null);
  const pengalamanRef = useRef<HTMLDivElement>(null);
  const proyekRef = useRef<HTMLDivElement>(null);
  const keterampilanRef = useRef<HTMLDivElement>(null);
  const kontakRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (homeRef.current) observer.observe(homeRef.current);
    if (profilRef.current) observer.observe(profilRef.current);
    if (keterampilanRef.current) observer.observe(keterampilanRef.current);
    if (pengalamanRef.current) observer.observe(pengalamanRef.current);
    if (proyekRef.current) observer.observe(proyekRef.current);
    if (kontakRef.current) observer.observe(kontakRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SectionContext.Provider
      value={{
        homeRef,
        profilRef,
        keterampilanRef,
        pengalamanRef,
        proyekRef,
        kontakRef,
        scrollToSection,
        activeSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};
