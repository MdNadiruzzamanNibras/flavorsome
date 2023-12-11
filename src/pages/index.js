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
// import Banner from "@/Component/Home/Banner";
const Home = ({ menuData, reviews }) => {
  return (
    <div>
      {/* <Banner /> */}
      <div>
        <div className="relative">
          <Image
            src={banner}
            style={{ width: "100vw", height: "70vh" }}
            alt="Picture of the author"
          />
        </div>
        <div className="absolute   text-white mt-[-400px]  lg:ml-52 mx-10 md:mt-[-500px]  lg:mt-[-500px]">
          {/* <h1 className="absolute  text-4xl   md:mt-[-500px]  lg:ml-40 lg:mt-[-400px]"> */}
          <h1 className="text-4xl font-extrabold md:text-6xl">
            <span>Crafting your</span> <br /> <span>Exceptional Dining</span>{" "}
            <br />
            <span>Reservations</span>
          </h1>
          {/* <p className="text-white  absolute mt-[-230px] lg:mt-[-200px]  md:mt-[-300px] lg:ml-40"> */}
          <p className="mt-6 lg:text-lg lg:font-medium">
            Reservation is a step into a world of gastronomic wonder. Reserve
            your table today <br className="hidden lg:block" /> and let us paint
            your culinary dreams into reality.
          </p>
        </div>
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
