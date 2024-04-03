
import GalleryList from '@/components/gallery/GalleryList'

import { projects } from '@/mockup'



export default function Commission() {
  return (
    <main  className='px-5'>
 
 

 <GalleryList projects ={projects} filterType='commission'/>
 
   
    </main>
  )
}
