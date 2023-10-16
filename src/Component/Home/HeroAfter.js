import Image from "next/image";
import chef from "@/images/hero-after/main_chef.jpg"
import an from "@/images/hero-after/lafing.jpg"

const HeroAfter = () => {
    return (
        <div className="flex justify-center  my-16">
            <div className="flex mr-4">
                <Image
  src={chef}
  style={{ width: '17vw', height: '50vh' }}
  alt="main chef"
/>
                <Image
  src={an}
  style={{ width: '17vw', height: '50vh', margin:"4vh 2vh" }}
  alt="main chef"
/>
            </div>
            <div>
                {/* <h2>about</h2> */}
                <h1 className="font-bold  lg:text-5xl md:text-2xl lg:mt-20 ">Feliciano <br /> Restaurant</h1>
                <p className="w-96 lg:font-medium lg:text-xl lg:mt-8">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p className="w-96 lg:font-medium lg:text-xl lg:my-8">Mon - Fri <span className="font-bold">8 AM - 11 PM</span></p>
                <h4 style={{color:"#D1B000"}} className="font-bold  lg:text-5xl md:text-2xl ">+ 1-978-123-4567</h4>
            </div>
        </div>
    );
};

export default HeroAfter;