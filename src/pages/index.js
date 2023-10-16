import CateringServices from "@/Component/Home/CateringServices";
import CountAll from "@/Component/Home/CountAll";
import HeroAfter from "@/Component/Home/HeroAfter";
import RootLayout from "@/Component/layout/RootLayout";
import Image from "next/image";
import banner from '../images/banner/banner.jpg'
import Menu from "@/Component/Home/Menu";
import Master_Chef from "@/Component/Home/Master_Chef";
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
        <Menu></Menu>
        <Master_Chef></Master_Chef>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};