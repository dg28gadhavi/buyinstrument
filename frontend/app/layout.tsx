import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Logo, PhoneIcon, WhatsAppIcon, MailIcon, CartIcon, ThemesIcon, SearchIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
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
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full  flex items-center justify-center py-3">
              <ButtonGroup>
                <Button variant="flat" color="primary" radius="full">
                  <PhoneIcon className="h-5 w-5" /> {/* Replace "One" with the custom PhoneIcon */}
                </Button>
                <Button variant="flat" color="primary" radius="full">
                  <WhatsAppIcon className="h-5 w-5" /> {/* Replace "One" with the custom PhoneIcon */}
                </Button>
                <Button variant="flat" color="primary" radius="full">
                  <MailIcon className="h-5 w-5" /> {/* Replace "One" with the custom PhoneIcon */}
                </Button>
              </ButtonGroup>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
