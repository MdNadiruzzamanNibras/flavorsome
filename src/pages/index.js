import CateringServices from "@/Component/Home/CateringServices";
import CountAll from "@/Component/Home/CountAll";
import HeroAfter from "@/Component/Home/HeroAfter";
import RootLayout from "@/Component/layout/RootLayout";
import Image from "next/image";
import banner from '../../public/images/banner/banner.jpg'
import Menu from "@/Component/Home/Menu";
import Master_Chef from "@/Component/Home/Master_Chef";
import BookTable from "@/Component/Home/BookTable";
import HappyClient from "@/Component/Home/HappyClient";
import RecentPost from "@/Component/Home/RecentPost";
import OurStory from "@/Component/Home/OurStory";
import FoodPHILOSOPHY from "@/Component/Home/FoodPHILOSOPHY";
const Home = ({ menuData }) => {
  
  return (
    <div>
      <div>
        <Image
  src={banner}
  style={{ width: '100%', height: '70vh' }}
  alt="Picture of the author"
/>

      </div>
      
        <div className=" mx-auto">
        <HeroAfter></HeroAfter>
        <CountAll></CountAll>
        <OurStory></OurStory>
        <FoodPHILOSOPHY></FoodPHILOSOPHY>
        <CateringServices></CateringServices>
        <Menu menuData={menuData}></Menu>
        <Master_Chef></Master_Chef>
        <BookTable></BookTable>
        <HappyClient></HappyClient>
        <RecentPost></RecentPost>
      {/* </div> */}
      </div>
      
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  
    const res = await fetch("http://localhost:5000/menu/");
    
    const data = await res.json();
if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return {
      props: {
        menuData: data,
      },
      revalidate: 10,
    };
  
};
