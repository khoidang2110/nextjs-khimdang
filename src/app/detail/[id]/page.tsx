'use client'
import { useParams } from 'next/navigation'

import Link from "next/link";

import { projects } from '@/mockup'
import Album from '@/components/gallery/Album';

export default function Detail() {
  const params = useParams()
console.log(params.id)
const currentAlbum = projects[Number(params.id)-1]
  return (
    <section >
       <Link href={currentAlbum.link} className="">
      <p className='pl-10 ml-10 uppercase opacity-70'>{currentAlbum.type}   </p>
       </Link>


   
      <div className='text-center'>
      <h1 className='text-2xl pb-10'>
{currentAlbum.title}</h1>
      <p>{currentAlbum.description}</p>
      
      <Album projects={currentAlbum} direct='flex-col'/>
      </div>

    </section>
  );
}
