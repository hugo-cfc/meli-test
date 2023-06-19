import { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

import Header from "../Components/Header";
import Providers from "./Providers";

const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mercado Livre Brasil - Frete Grátis no mesmo dia",
  description:
    "Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis.",
  themeColor: "#fff159",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-grayML" lang="pt-BR" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>
          <Header />

          <main className="m-auto h-10 min-h-screen w-screen tablet:w-[100%] tablet:px-2 notebook:w-[1000px] notebook:px-0 desktop:w-[1200px]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
