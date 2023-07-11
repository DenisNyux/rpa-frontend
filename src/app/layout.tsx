import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { Raleway } from "next/font/google";

const ralewayFont = Raleway({ subsets: ["cyrillic", "latin"] });

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
