'use client'
import { useParams } from 'next/navigation'

import Link from "next/link";

import { projects } from '@/mockup'
import Album from '@/components/gallery/Album';
import Image from "next/image";
export default function Detail() {
  const params = useParams()
console.log(params.id)
const currentAlbum = projects[Number(params.id)-1]
  return (
    <section >
      <div className='pl-7'>
      <Link href={currentAlbum.link} className="">
       <Image
            width={35}
            height={35}
            src="/back.png"
            alt="back"
            className="mx-3"
          />
       </Link>
      </div>
     


   
      <div className='text-center'>
      <h1 className='text-2xl pb-10'>
{currentAlbum.title}</h1>
      <p>{currentAlbum.description}</p>
      
      <Album projects={currentAlbum} direct='flex-col'/>
      </div>

    </section>
  );
}
