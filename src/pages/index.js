import Image from "next/image";
import RootLayout from "../Component/RootLayout";
import banner from '../images/banner/banner.jpg';
import HeroAfter from "@/Component/HeroAfter";
import CountAll from "@/Component/CountAll";
import CateringServices from "@/Component/CateringServices";
const Home = () => {
  return (
    <div>
      <div>
        <Image
  src={banner}
  style={{ width: '100%', height: '70vh' }}
  alt="Picture of the author"
/>

      </div>
      <div className="max-w-7xl mx-auto">
        <HeroAfter></HeroAfter>
        <CountAll></CountAll>
        <CateringServices></CateringServices>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};