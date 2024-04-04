import Link from "next/link";
import { projects } from "@/mockup";
import Image from "next/image";
import styles from "./styles.module.css";
export default function Home() {
  return (
    <main className="">
      <Link href={"/archive"} className="">
        <img
          className={styles.image}
          src="/images/tag2/hinh241.jpg"
          alt="aboutT"
        />
      </Link>
    </main>
  );
}
