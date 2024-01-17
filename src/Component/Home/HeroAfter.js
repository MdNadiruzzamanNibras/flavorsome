import Image from "next/image";
import chef from "../../../public/images/hero-after/main_chef.jpg";
import an from "../../../public/images/hero-after/lafing.jpg";

const HeroAfter = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:flex lg:justify-center  my-16">
        <div className="lg:flex mr-4">
          <Image
            src={chef}
            className=" mx-auto lg:mx-0 w-96 lg:w-64 lg:h-[450px] mt-10"
            alt="main chef"
          />
          <Image
            src={an}
            className="w-96 lg:w-64  lg:h-[450px] mx-auto mt-8 lg:mt-0 lg:mx-3"
            alt="main chef"
          />
        </div>
        <div className="flex justify-center ">
          <div className="ml-10 md:px-0">
            {/* <h2>about</h2> */}
            <h1 className="font-bold text-3xl lg:text-5xl md:text-2xl lg:mt-20 ">
              Flavorsome <br /> Restaurant
            </h1>
            <p className="w-96 lg:font-medium lg:text-xl lg:mt-8">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className="w-96 lg:font-medium text-lg lg:text-xl lg:my-8">
              Mon - Fri <span className="font-bold">8 AM - 11 PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAfter;
