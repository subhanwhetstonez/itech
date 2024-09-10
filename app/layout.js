import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./content/header";
import Footer from "./content/footer";
import Hamnav from "./content/hamnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ITech",
  description: "Notepad app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden md:grid w-full">
          <Navbar />
        </div>
        <div className="grid md:hidden">
          <Hamnav />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
