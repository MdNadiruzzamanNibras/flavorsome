import Image from "next/image";
import { CountUp } from "use-count-up";
import count from "../../../public/images/couter/Process-bg.png";

const CountAll = () => {
  return (
    <div className="container mx-auto mb-12">
      <div className="relative">
        <Image src={count} alt="" className="w-full h-[500px] lg:h-72" />
      </div>
      <div className="grid absolute text-center  mt-[-450px] lg:mt-[-150px] text-white grid-cols-1 ml-20 lg:ml-0 lg:grid-cols-4 mb-4">
        <div>
          <div className="md:mx-56 mt-5 lg:mr-40 lg:ml-10">
            <h1 style={{ color: "#D1B000" }} className="text-5xl font-bold">
              <CountUp isCounting start={0} end={18} duration={13} />
            </h1>
            <p className="lg:font-medium lg:text-base uppercase">
              Years of experienced
            </p>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <h1 style={{ color: "#D1B000" }} className="text-5xl font-bold">
              <CountUp isCounting start={0} end={100} duration={13} />
            </h1>
            <p className="lg:font-medium lg:text-base">MENUS/DISH</p>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <h1
              style={{ color: "#D1B000" }}
              className="text-5xl text-orange-300 font-bold"
            >
              <CountUp isCounting start={0} end={50} duration={13} />
            </h1>
            <p className="lg:font-medium lg:text-base">STAFFS</p>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <h1 style={{ color: "#D1B000" }} className="text-5xl font-bold">
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
