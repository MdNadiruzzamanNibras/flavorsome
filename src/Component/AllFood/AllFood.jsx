import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const AllFood = ({ menuData }) => {
  const [page, setpage] = useState(0);
  const ITEMS_PER_PAGE = 6;
  const handlePageClick = (selectedPage) => {
    setpage(selectedPage.selected * ITEMS_PER_PAGE);
  };

  const paginatedData = menuData.slice(page, page + ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto my-20 px-2">
      <div>
        <div className="text-center my-20">
          <h1 className="text-3xl font-bold   text-black"> Our Menu</h1>
        </div>
        <div className="grid md:ml-44 grid-cols-1 md:grid-cols-2 gap-5 ">
          {paginatedData.map((food) => (
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
                    <h5 className="text-red-500"> $29 </h5>
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
      <div>
        <ReactPaginate
          className="flex justify-center mt-16 items-center text-white "
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(menuData.length / ITEMS_PER_PAGE)}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center items-center"
          pageClassName="mr-2"
          pageLinkClassName="bg-deepIndigo  py-2 px-3 rounded-md"
          activeClassName=" text-white  bg-deepIndigo  py-2 px-3 rounded-md"
          previousClassName="mr-2"
          previousLinkClassName="bg-deepIndigo  py-2 px-3 rounded-md"
          nextClassName="mr-2"
          nextLinkClassName="bg-deepIndigo  py-2 px-3 rounded-md"
          breakClassName="mr-2"
          breakLinkClassName="bg-deepIndigo  py-2 px-3 rounded-md"
        />
      </div>
    </div>
  );
};

export default AllFood;
