
import GalleryList from '@/components/gallery/GalleryList'

import { projects } from '@/mockup'



export default function Exhibition() {
  return (
    <main  className='px-20'>
 
 

 <GalleryList projects ={projects} filterType='exhibition'/>
 
   
    </main>
  )
}
