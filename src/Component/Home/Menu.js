import Image from "next/image";
import Link from "next/link";

const Menu = ({ menuData }) => {
  const reverseMenu = menuData.reverse();
  return (
    <div className="container mx-auto">
      <div className="my-20  ">
        <h1 className="text-4xl font-extrabold text-deepIndigo md:ml-0 lg:mr-44 text-center my-7">
          Our Menu
        </h1>

        <div className="grid grid-cols-1 ml-20 md:24 lg:ml-20 md:grid-cols-2  gap-5 ">
          {reverseMenu?.slice(0, 4).map((food) => (
            <>
              <div
                key={food._id}
                className="  lg:flex lg:items-center rounded-lg hidden md:block w-80 mx-10 md:mx-0  border-2 lg:w-[520px]   my-5"
              >
                <div className="">
                  <Image
                    width={1000}
                    height={1000}
                    src={food.image_url}
                    className="w-80  lg:w-64 lg:h-64"
                    alt="menu"
                  />
                </div>
                <div className="w-32 lg:w-64 flex flex-col md:h-64">
                  <div className="flex-grow ml-4 text-xl">
                    <div className="flex font-bold justify-between">
                      <div className=" ">
                        <h5>{food.title}</h5>
                      </div>
                      <div>
                        <h5 className="text-red-500 mr-1"> $29 </h5>
                      </div>
                    </div>

                    <h4 className="text-lg mt-2 ">
                      Meat, Potatoes, Rice, Tomatoe
                    </h4>
                  </div>

                  <div className="flex-none">
                    <div className="lg:ml-0 flex justify-center mb-2 mt-auto md:ml-16">
                      <Link href={`food/${food?._id}`}>
                        <button className="bg-deepIndigo rounded-md text-white py-2 px-5 mt-3 ml-3 font-bold">
                          Order Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* phone display */}
              <div key={food._id} className="flex flex-col mr-16 md:hidden">
                <Image
                  src={food.image_url}
                  alt="food image"
                  width={500}
                  height={500}
                  className="w-[400px] h-[300px] "
                />
                <div className="flex text-xl font-bold justify-between">
                  <div className="ml-2 ">
                    <h5>{food.title}</h5>
                  </div>
                  <div>
                    <h5 className="text-red-500"> $29 </h5>
                  </div>
                </div>
                <h4 className="text-lg  mx-3">Meat, Potatoes, Rice, Tomatoe</h4>
                <div className="flex justify-center">
                  <Link href={`food/${food?._id}`}>
                    <button className="bg-deepIndigo rounded-lg text-white py-2 px-5 mt-3 ml-3 font-bold">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
