"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { useState, useContext } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "@/components/icons";

import { SectionContext } from "@/contexts/SectionContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const context = useContext(SectionContext);

  if (!context) {
    return null; // Handle the case where context is undefined
  }

  const {
    profilRef,
    keterampilanRef,
    pengalamanRef,
    proyekRef,
    kontakRef,
    scrollToSection,
    activeSection,
  } = context;

  const navItems = [
    {
      label: "profil",
      ref: profilRef,
      id: "profil",
    },
    {
      label: "keterampilan",
      ref: keterampilanRef,
      id: "keterampilan",
    },
    {
      label: "pengalaman",
      ref: pengalamanRef,
      id: "pengalaman",
    },
    {
      label: "proyek",
      ref: proyekRef,
      id: "proyek",
    },
    {
      label: "kontak",
      ref: kontakRef,
      id: "kontak",
    },
  ];

  return (
    <NextUINavbar isMenuOpen={menuOpen} onMenuOpenChange={setMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <div
            className="flex justify-start items-center gap-1 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <p className="font-bold text-inherit">aderizaldi</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-3/5 md:basis-full"
        justify="center"
      >
        <ul className="hidden md:flex gap-4">
          {navItems.map((item, index) => (
            <NavbarItem key={index}>
              <div
                color="foreground"
                className={`cursor-pointer subpixel-antialiased ${
                  activeSection == item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.ref)}
              >
                <span className="text-primary">/</span>
                {item.label}
              </div>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 md:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Gitlab" href={siteConfig.links.gitlab}>
            <GitlabIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          {/* add border slate */}
          <div className="border-l border-slate-500 mx-5" />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem
              key={index}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <div
                color="foreground"
                className={`cursor-pointer subpixel-antialiased ${
                  activeSection == item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.ref)}
              >
                <span className="text-primary">/</span>
                {item.label}
              </div>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Gitlab" href={siteConfig.links.gitlab}>
            <GitlabIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
