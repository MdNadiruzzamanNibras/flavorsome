import Image from "next/image";
import banner from "../../../public/images/banner/banner-bg-two.jpg";

const Banner = () => {
  return (
    <div>
      <Image
        src={banner}
        style={{ width: "100%", height: "70vh", objectFit: "cover" }}
        alt="Picture of the author"
      />
      <h1 className="">
        <span>Crafting your</span> <br /> <span>Exceptional Dining</span> <br />
        <span>Reservations</span>
      </h1>
    </div>
  );
};

export default Banner;
