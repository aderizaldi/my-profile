import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Link } from "@nextui-org/link";
import { BiHeart } from "react-icons/bi";
import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="id" className="scroll-smooth">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-10 px-6 flex-grow">
              {children}
            </main>
            <footer className="py-5 w-full flex flex-col items-center justify-center gap-1">
              <div className="flex items-center justify-center gap-1">
                <p className="text-default-500">made with </p>
                <span className="text-primary">
                  <BiHeart />
                </span>
                <p className="text-default-500">by me</p>
                <Link
                  isExternal
                  href="https://instagram.com/ade.rizaldi"
                  target="_blank"
                  className="text-primary"
                >
                  Ade Rizaldi
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
