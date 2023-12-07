import CateringServices from "@/Component/Home/CateringServices";
import CountAll from "@/Component/Home/CountAll";
import HeroAfter from "@/Component/Home/HeroAfter";
import RootLayout from "@/Component/layout/RootLayout";
import Image from "next/image";
import banner from "../../public/images/banner/banner-bg-two.jpg";
import Menu from "@/Component/Home/Menu";
import Master_Chef from "@/Component/Home/Master_Chef";
import BookTable from "@/Component/Home/BookTable";
import HappyClient from "@/Component/Home/HappyClient";
import RecentPost from "@/Component/Home/RecentPost";
import OurStory from "@/Component/Home/OurStory";
import FoodPHILOSOPHY from "@/Component/Home/FoodPHILOSOPHY";
const Home = ({ menuData, reviews }) => {
  return (
    <div>
      <div>
        <Image
          src={banner}
          style={{ width: "100%", height: "70vh" }}
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
        <HappyClient reviews={reviews}></HappyClient>
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

export const getServerSideProps = async () => {
  try {
    const [menuRes, reviewRes] = await Promise.all([
      fetch("https://encouraging-pants-dog.cyclic.app/menus"),
      fetch("https://encouraging-pants-dog.cyclic.app/allreview"),
    ]);

    const [menuData, reviews] = await Promise.all([
      menuRes.ok ? menuRes.json() : [],
      reviewRes.ok ? reviewRes.json() : [],
    ]);

    return {
      props: {
        menuData,
        reviews,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        menuData: [],
        reviews: [],
      },
    };
  }
};
