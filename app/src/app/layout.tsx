import { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "../Components/Header";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "| Mercado Livre 📦",
  description:
    "Frete grátis no dia ✓ Compre Iphone Se 2020 parcelado sem juros! Saiba mais sobre nossas incríveis ofertas e promoções em milhões de produtos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="" lang="PT-BR" suppressHydrationWarning>
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
