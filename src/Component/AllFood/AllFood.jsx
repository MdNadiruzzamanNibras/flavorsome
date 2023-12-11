import Image from "next/image";
import Link from "next/link";

const AllFood = ({ menuData }) => {
  return (
    <div className="container mx-auto my-20 px-2">
      <div>
        <div className="text-center my-20">
          <h1 className="text-3xl font-bold   text-black"> Our Menu</h1>
        </div>
        <div className="grid md:ml-44 grid-cols-1 md:grid-cols-2 gap-5 ">
          {menuData.map((food) => (
            <div
              key={food._id}
              className="  flex items-center rounded-lg w-64 border-2 lg:w-[520px]   my-5"
            >
              <div className="w-32 lg:w-64 lg:h-64">
                <Image
                  width={256}
                  height={256}
                  src={food.image_url}
                  className=" lg:w-64 lg:h-64"
                  alt="menu"
                />
              </div>
              <div className="w-32 lg:w-64 lg:h-64">
                <div className="flex  justify-between text-xl font-bold mt-3">
                  <div className="ml-2 ">
                    <h5>{food.title}</h5>
                  </div>
                  <div>
                    <h5 className="text-deepIndigo"> $29 </h5>
                  </div>
                </div>
                <h4 className="text-lg mt-12 mx-3">
                  Meat, Potatoes, Rice, Tomatoe
                </h4>
                <Link href={`food/${food?._id}`}>
                  <button className=" py-2 px-5 mt-3 ml-3 bg-deepIndigo text-white rounded-md font-bold">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFood;
