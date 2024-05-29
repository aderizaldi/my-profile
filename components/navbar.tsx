'use client';
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
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
} from "@/components/icons";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <NextUINavbar isMenuOpen={menuOpen} onMenuOpenChange={setMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="#home">
            <p className="font-bold text-inherit">aderizaldi</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex basis-3/5 md:basis-full" justify="center">
        <ul className="hidden md:flex gap-4">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={index}>
              <NextLink
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
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
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
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
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={index} onClick={() => {
              setMenuOpen(false);
            }}>
              <NextLink
                href={item.href}
                color="foreground"
              >
                {item.label}
              </NextLink>
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
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
            <LinkedinIcon className="text-default-500" />
          </Link>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
