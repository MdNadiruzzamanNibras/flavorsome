import Image from "next/image";
import Link from "next/link";

const Menu = ({ menuData }) => {
  return (
    <div className="container mx-auto">
      <div className="my-20  ">
        <h1 className="text-4xl font-extrabold mr-44 text-center my-7">
          Our Menu
        </h1>

        <div className="grid grid-cols-1 ml-24 lg:ml-20 md:grid-cols-2  gap-5 ">
          {menuData.slice(0, 4).map((food) => (
            <div
              key={food._id}
              className="  lg:flex lg:items-center rounded-lg w-64 border-2 lg:w-[520px]   my-5"
            >
              <div className="">
                <Image
                  width={1000}
                  height={1000}
                  src={food.image_url}
                  className=" lg:w-64 lg:h-64"
                  alt="menu"
                />
              </div>
              <div className="w-32 lg:w-64 lg:h-64">
                <div className="flex w-32 lg:w-64 justify-between text-xl font-bold mt-3">
                  <div className="ml-2 ">
                    <h5>{food.title}</h5>
                  </div>
                  <div className="ml-28">
                    <h5 style={{ color: "#c8a97e" }}> $29 </h5>
                  </div>
                </div>
                <h4 className="text-lg mt-12 lg:mx-3">
                  Meat, Potatoes, Rice, Tomatoe
                </h4>
                <div className="lg:ml-0 md:ml-16">
                  <Link href={`food/${food?._id}`}>
                    <button
                      style={{ backgroundColor: "#c8a97e", color: "white" }}
                      className=" py-2 px-5 mt-3 ml-3 font-bold"
                    >
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
