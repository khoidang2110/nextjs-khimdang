import Link from "next/link";
import { projects } from "@/mockup";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Link href={"/archive"} className="">
        <img
          style={{ width: "auto", height: "1000px",objectFit:'cover' }}
          src="/images/tag2/hinh241.jpg"
          alt="aboutT"
        />
      </Link>
    </main>
  );
}
