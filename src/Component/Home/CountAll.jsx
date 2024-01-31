import Image from "next/image";
import { CountUp } from "use-count-up";
import count from "../../../public/images/couter/Process-bg.png";

const CountAll = () => {
  const counterName = [{}];
  return (
    <div className="container mx-auto mb-12">
      {/* className="absolute z-10 mt-[-500px] lg:mt-[-200px]" */}

      <div
        className="w-full h-56"
        style={{
          backgroundImage: `url(${"https://i.ibb.co/FbWdqHt/Process-bg.webp"})`,
        }}
      >
        <div
          className="grid  text-center
         text-white grid-cols-12 lg:pt-8  mb-4 "
        >
          <div className=" mt-5 col-span-12 text-center lg:px-14   md:col-span-3 ">
            <h1 className="text-6xl lg:text-8xl text-stone-300 font-bold">
              <CountUp isCounting start={0} end={18} duration={13} />
            </h1>
            <p className="lg:font-medium lg:text-base uppercase">
              Years of experienced
            </p>
          </div>

          <div className="mt-5 col-span-12 text-center  lg:px-14  md:col-span-3">
            <h1 className="text-6xl lg:text-8xl text-stone-300 font-bold">
              <CountUp isCounting start={0} end={100} duration={13} />
            </h1>
            <p className="lg:font-medium lg:text-base">MENUS/DISH</p>
          </div>

          <div className="mt-5 col-span-12 text-center lg:px-14  md:col-span-3">
            <h1 className="text-6xl lg:text-8xl text-stone-300 font-bold">
              <CountUp isCounting start={0} end={50} duration={13} />
            </h1>
            <p className="lg:font-medium lg:text-base">STAFFS</p>
          </div>

          <div className="mt-5 col-span-12 lg:px-14  md:col-span-3">
            <h1 className="text-6xl lg:text-8xl text-stone-300 font-bold">
              <CountUp isCounting start={5000} end={15000} duration={12} />
            </h1>
            <p className="lg:font-medium lg:text-base">HAPPY CUSTOMERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountAll;
