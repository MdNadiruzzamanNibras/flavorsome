import Image from "next/image";
import first from "../../../public/images/philosphy/uper.jpg";
import two from "../../../public/images/philosphy/down.jpg";

const FoodPHILOSOPHY = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-80 lg:mt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-2">
          <div className="lg:ml-72 md:ml-16">
            <Image
              src={two}
              className="md:w-72 md:h-96  md:relative "
              alt="food philosopy"
            />
            <Image
              src={first}
              className="md:w-80 md:h-[400px]  md:absolute md:ml-24 md:mt-[-500px]"
              alt="food philosopy"
            />
          </div>
          <div>
            <div className="md:ml-16 lg:ml-0 md:mt-7 lg:mt-0">
              <div className="flex items-center ">
                <h6 style={{ color: "#c8a97e" }} className="text-xl font-bold">
                  QUALITY & BALANCE
                </h6>
                <hr
                  style={{ backgroundColor: "#c8a97e" }}
                  className="w-20 h-1 ml-8"
                />
              </div>
              <h2 className="text-4xl my-6 font-bold">OUR FOOD PHILOSOPHY</h2>
              <p className="text-lg mb-6">
                Simple and balanced. Alexander Petillo brings together flavors
                and specialties from Italy and beyond to create his own culinary
                world, full of surprising artistry.
              </p>
              <button
                style={{ backgroundColor: "#c8a97e" }}
                className="uppercase py-3 px-6 text-white font-semibold"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPHILOSOPHY;
