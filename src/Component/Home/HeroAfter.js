import Image from "next/image";
import chef from "../../../public/images/hero-after/main_chef.jpg"
import an from "../../../public/images/hero-after/lafing.jpg"

const HeroAfter = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:flex lg:justify-center  my-16">
            <div className="lg:flex mr-4">
                <Image
  src={chef}
 className="lg:w-64 lg:h-[450px] mt-10"
  alt="main chef"
/>
                <Image
  src={an}
  className="lg:w-64  lg:h-[450px] mx-3"
  alt="main chef"
/>
            </div>
            <div>
                {/* <h2>about</h2> */}
                <h1 className="font-bold  lg:text-5xl md:text-2xl lg:mt-20 ">Flavorsome <br /> Restaurant</h1>
                <p className="w-96 lg:font-medium lg:text-xl lg:mt-8">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p className="w-96 lg:font-medium lg:text-xl lg:my-8">Mon - Fri <span className="font-bold">8 AM - 11 PM</span></p>
                <h4 style={{color:"#D1B000"}} className="font-bold  lg:text-5xl md:text-2xl ">+ 1-978-123-4567</h4>
            </div>
        </div>
        </div>
    );
};

export default HeroAfter;