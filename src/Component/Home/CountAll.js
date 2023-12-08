import Image from "next/image";
import { CountUp } from "use-count-up";
import count from "../../../public/images/couter/Process-bg.png";

const CountAll = () => {
  return (
    <div className="container mx-auto mb-12">
      <div className="relative">
        <Image src={count} alt="" className="w-full h-[500px] lg:h-72" />
      </div>
      <div
        className="grid absolute text-center
        mt-[-500px] lg:mt-[-200px] text-white grid-cols-1 ml-16 lg:ml-0 lg:grid-cols-4 mb-4"
      >
        <div>
          <div className="md:mx-56 mt-5 lg:mr-32 lg:ml-10">
            <h1 className="text-6xl lg:text-8xl text-stone-300 font-bold">
              <CountUp isCounting start={0} end={18} duration={13} />
            </h1>
            <p className="lg:font-medium lg:text-base uppercase">
              Years of experienced
            </p>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <h1 className="text-6xl lg:text-8xl text-stone-300 font-bold">
              <CountUp isCounting start={0} end={100} duration={13} />
            </h1>
            <p className="lg:font-medium lg:text-base">MENUS/DISH</p>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <h1 className="text-6xl lg:text-8xl text-stone-300 font-bold">
              <CountUp isCounting start={0} end={50} duration={13} />
            </h1>
            <p className="lg:font-medium lg:text-base">STAFFS</p>
          </div>
        </div>
        <div>
          <div className="mt-5">
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
