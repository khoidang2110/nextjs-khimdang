'use client'

import { FC, useEffect, useState } from "react";


import styles from "./styles.module.css";
import { IProject } from "@/interfaces/project";
import GalleryItem from "./GalleryItem";


interface PostListTypeSmallProps {
  projects: IProject[];
  filterType:string
}
const GalleryList: FC<PostListTypeSmallProps> = ({ projects = [],filterType }) => {

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



  const filteredData = projects.filter(item => item.type === filterType);
  return (
    <section>
 {windowWidth < 900 ? <p className='pl-2  uppercase opacity-70'>{filteredData[0].type}   </p> :""}

<div  className={styles.galleryListSection}>
{filteredData.reverse().map((item: IProject, index: number) => (
        <div className={styles.threePecent}>
          <div className={styles.galleryContainer}>
            <GalleryItem item={item} key={index} />
          </div>
        </div>
      ))}
</div>
      
     


    </section>
  );
};

export default GalleryList;
