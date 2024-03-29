import React from "react";
import { HiOutlineMinus } from "react-icons/hi";

import Image from "next/image";
const HappyClient = ({ reviews }) => {
  const reversereviews = [...reviews].reverse();

  return (
    <div className=" bg-midnightBlue">
      <div className="container mx-auto mt-20  pb-12">
        <div className="my-20">
          <h3 className="text-center text-4xl text-pastelPurple pt-8 font-bold">
            Happy Customer
          </h3>
          <div className="grid lg:grid-cols-3 my-6 ">
            {reversereviews.slice(0, 3).map((review) => (
              <div
                key={review._id}
                className="card  md:mx-auto lg:mx-0 md:my-7 
                 md:w-96 h-64 flex items-center bg-deepIndigo py-3 px-4  shadow-xl"
              >
                <div className="avatar my-2">
                  <div className="w-16 rounded-full">
                    <Image
                      width={64}
                      height={64}
                      src={review.image}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <p className="mb-2 text-pastelPurple mt-4 mx-3">
                  {review?.review}
                </p>
                <h4 className=" flex items-center text-pastelPurple">
                  <HiOutlineMinus />{" "}
                  <span className="text-2xl  capitalize font-semibold">
                    {review?.name}
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
