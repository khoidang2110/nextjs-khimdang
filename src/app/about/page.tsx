import AboutImg from "@/components/aboutImg/aboutImg";
import styles from "./styles.module.css";
export default function About() {
  return (
    <section >
      <div className="flex justify-center flex-col items-center">


<AboutImg/>
     <div className="flex flex-col  items-center pt-3">
      <h1 className="text-xl">FEATURES</h1>

      <a className=" underline underline-offset-1 " href="https://saigoneer.com/ton-sur-ton/27135-easybadwork-s-free-spirits-are-rooted-in-nature-and-the-underground?fbclid=IwZXh0bgNhZW0CMTEAAR0Z4KJMikozpKOB9k5-KZbv_enTIS_01ZqlwEtHsOpeCHpON_NXM9Lk5UM_aem_n5QZSwuxVZ_uUqQQbio06w">Saigoneer</a>

      <a className=" underline underline-offset-1 " href="https://vietcetera.com/vn/khim-dang-loi-the-lon-nhat-cua-nghe-si-viet-nam-la-can-tinh-viet">VietCetera</a>
    
      <a className=" underline underline-offset-1 " href="https://www.elle.vn/the-gioi-van-hoa/khim-dang-con-cop-khong-cua-rieng-ai">ELLE</a>

      <a className=" underline underline-offset-1 " href="https://www.lofficielvietnam.com/art-design/o-phuong-dong-tam-guong-phan-chieu-hinh-anh-va-tam-hon-khim-dang">{"L'Officiel"}</a>
     
      <a className=" underline underline-offset-1 " href="https://mensfolio.vn/an-khim-dang-hoa-si-tre-tu-tao-dung-di-san-niem-vui/">{"Men's Folio"}</a>
      <h1 className="text-xl">ART FABRICATOR</h1>
     <a className=" underline underline-offset-1 " href="https://www.tuanandrewnguyen.com/theisland">The Island</a>
     <a className=" underline underline-offset-1 " href="https://www.tuanandrewnguyen.com/myailingbeliefs">My Ailing Beliefs</a>
     <a className=" underline underline-offset-1 " href="https://www.tuanandrewnguyen.com/theunburiedsoundsofatroubledhorizon">The Unburied Sounds Of A Troubled Horizon</a>
     </div>
 
     
    <div  className="flex flex-col items-center pb-10">
    <h1 className="text-xl">CONTACT</h1>
      <p className="">khiimdang@gmail.com </p>
      <a className=" underline underline-offset-1 " href="https://instagram.com/khimdangoff">{"@khimdangoff"}</a>
    </div>
      </div>
    </section>
  );
}
