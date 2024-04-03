'use client'
import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})
// export const metadata: Metadata = {
//   title: "KHIMDANG",
//   description: "illustrator, khiim, khiim dang",

// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log('pathname home', pathname);
  return (
    <html lang="en" className={roboto.className}>

      <body className=' bg-white'>
      {pathname != '/' && <Header />}  
      
        {children}
    
     
        {pathname != '/' &&   <Footer />}  
      </body>
    </html>
  );
}
