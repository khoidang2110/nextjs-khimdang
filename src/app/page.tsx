
import GalleryList from '@/components/gallery/GalleryList'

import {  projects } from '@/mockup'
import Image from 'next/image'

export default function Home() {
  return (
    <main  className='px-20'>
 


<GalleryList projects ={projects} filterType='commercial'/>
 
   
    </main>
  )
}
