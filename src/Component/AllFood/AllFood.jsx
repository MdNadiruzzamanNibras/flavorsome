import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AllFood = ({ menuData }) => {
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 6;

  // Calculate the start and end index of the items for the current page
  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = (page + 1) * ITEMS_PER_PAGE;

  // Slice the menuData array to get items for the current page
  const paginatedData = menuData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(menuData.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="container mx-auto my-20 px-2">
      <div>
        <div className="text-center my-20">
          <h1 className="text-3xl font-bold text-black"> Our Menu</h1>
        </div>
        <div className="grid md:ml-44 grid-cols-1 md:grid-cols-2 gap-5 ">
          {paginatedData.map((food) => (
            <div
              key={food._id}
              className="lg:flex lg:items-center rounded-lg hidden md:block w-80 mx-10 md:mx-0 border-2 lg:w-[520px] my-5"
            >
              <div className="">
                <Image
                  width={1000}
                  height={1000}
                  src={food.image_url}
                  className="w-80 lg:w-64 lg:h-64"
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
                    Meat, Potatoes, Rice, Tomato
                  </h4>
                </div>

                <div className="flex-none">
                  <div className="lg:ml-0 flex justify-center mb-2 mt-auto md:ml-16">
                    <Link href={`food/${food?._id}`}>
                      <button className="bg-deepIndigo rounded-lg text-white py-2 px-5 mt-3 ml-3 font-bold">
                        Order Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="bg-deepIndigo mr-4 text-white font-bold py-2 px-4 rounded-l"
            onClick={prevPage}
            disabled={page === 0}
          >
            Prev
          </button>
          <button
            className="bg-deepIndigo text-white ml-4 font-bold py-2 px-4 rounded-r"
            onClick={nextPage}
            disabled={page === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllFood;
