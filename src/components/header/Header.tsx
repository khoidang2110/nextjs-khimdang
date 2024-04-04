"use client";

import { use, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Menu from "../menu/Menu";
const Header: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scroll = window.scrollY;
    console.log(scroll, isVisible);
    const shouldBeVisible = scroll <= 40;
    setIsVisible(shouldBeVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [windowWidth, setWindowWidth] = useState<number>(0);
console.log(windowWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      
    >
      <div className={` w-full bg-white text-prim transition-all duration-300  ${
        isVisible ? "opacity-100" && (windowWidth < 900 ? "" : "h-72") : "opacity-0"
      }`}>



        
      {windowWidth < 900 ?  <div className={styles.menuButton}>
      <Menu/>
      </div>: ""}
<div className="flex justify-center py-5">
{windowWidth < 900 ? <Image
className={styles.imgDownload}
        width={100}
        height={100}
        src='/images/tag2/landlogo.png'
        alt='aboutT'
        /> : <Image
        className={styles.imgDownload}
        width={200}
        height={200}
        src='/images/tag2/landlogo.png'
        alt='aboutT'
        />}

</div>

{windowWidth > 900 ? 

      <nav>
        <ul className={styles.headerUl}>
          <li
            className={
              pathname == "/about" ? styles.tabActive : styles.tabInActive
            }
          >
            <Link href="/about">ABOUT</Link>
          </li>
          <li
            className={pathname == "/commission" ? styles.tabActive : styles.tabInActive}
          >
            <Link href="/commission">
            COMMISSION
            </Link>
          </li>
          <li
            className={
              pathname == "/exhibition" ? styles.tabActive : styles.tabInActive
            }
          >
            <Link href="/exhibition">
              EXHIBITION {windowWidth < 900 ? "" : " / PUBLICATION"}
            </Link>
          </li>
          <li
            className={
              pathname == "/archive" ? styles.tabActive : styles.tabInActive
            }
          >
            <Link href="/archive">ARCHIVE</Link>
          </li>
        </ul>
      </nav>
      :""}
      </div>
 
    </header>
  );
};

export default Header;
