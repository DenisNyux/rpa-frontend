import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { Raleway, Montserrat, Inter } from "next/font/google";

const ralewayFont = Raleway({ subsets: ["cyrillic", "latin"] });
const montserratFont = Montserrat({ subsets: ["cyrillic", "latin"] });
const interFont = Inter({ subsets: ["cyrillic", "latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ralewayFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
