'use client'




import { projects } from '@/mockup'
import Album from '@/components/gallery/Album';
import GalleryList from '@/components/gallery/GalleryList';

export default function Detail() {


const currentAlbum = projects[Number(0)]
  return (
//     <section className='bg-white'>

//       <div className='text-center'>
//       {/* <h1 className='text-2xl pb-10'>
// {currentAlbum.title}</h1>
//       <p>{currentAlbum.description}</p> */}
      
//       {/* <Album projects={currentAlbum}/> */}
//       <GalleryList projects ={projects} filterType='archive'/>
//       </div>

//     </section>
        <main  className='px-20'>
 
 

        <GalleryList projects ={projects} filterType='exhibition'/>
        
          
           </main>
  );
}
