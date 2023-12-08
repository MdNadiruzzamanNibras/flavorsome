import DashBoard from "@/Component/layout/DashBoard";
import auth from "@/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import image_one from "../../../public/images/avatar/images.jpg";
import image_two from "../../../public/images/avatar/image_2.jpg";
import female_one from "../../../public/images/avatar/female.jpg";
import female_two from "../../../public/images/avatar/female_two.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReview = () => {
  const [user] = useAuthState(auth);

  const handleReview = (e) => {
    e.preventDefault();

    const review = e.target.review.value;
    const image = e.target.image.value;

    const reviewdata = {
      name: user.displayName,
      review: review,
      image: image,
    };
    fetch("https://encouraging-pants-dog.cyclic.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("add you riview");
        } else {
          toast.error("Try agian");
        }
      });
  };
  return (
    <div className="container mx-auto">
      <div className=" flex justify-center h-screen">
        <div className=" w-full lg:w-[500px]  px-7 mt-20 h-fit">
          <h1 className="text-xl font-semibold">
            Write Your Opinion About Flavorsome{" "}
          </h1>
          <form onSubmit={handleReview}>
            <div className="flex flex-col">
              <textarea
                type="text"
                required
                placeholder="Your review"
                name="review"
                className="text-center py-2 lg:ml-4 w-80 h-44 my-2
                 focus:outline-none rounded border-gray-500 border-2 "
              />
            </div>
            <div className="flex justify-around items-center mb-6 w-80 lg:ml-5">
              <div className="relative">
                <Image
                  className="peer"
                  width={40}
                  height={40}
                  src={image_one}
                  alt=""
                />
                <span className="text-xs hidden absolute  peer-hover:block">
                  Male One
                </span>
              </div>

              <div className="relative">
                <Image
                  className="peer"
                  width={40}
                  height={40}
                  src={image_two}
                  alt=""
                />
                <span className="text-xs hidden absolute peer-hover:block">
                  Male two
                </span>
              </div>
              <div className="relative">
                <Image
                  className="peer"
                  width={40}
                  height={40}
                  src={female_one}
                  alt=""
                />
                <span className="text-xs hidden absolute  peer-hover:block">
                  Female One
                </span>
              </div>
              <div className="relative ">
                <Image
                  className="peer"
                  width={45}
                  height={45}
                  src={female_two}
                  alt=""
                />
                <span className="text-xs hidden absolute  peer-hover:block">
                  Female Two
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="label">
                <span className="text-base lg:ml-4 text-black font-bold">
                  Select an Image
                </span>
              </label>
              <select
                required
                name="image"
                className="text-center py-2 w-80 lg:ml-4 my-2 focus:outline-none rounded border-gray-500 border-2"
              >
                <option value="" disabled selected>
                  Select Your Avatar
                </option>
                <option value="/images/avatar/images.jpg">Male One</option>
                <option value="/images/avatar/image_2.jpg">Male two</option>
                <option value="/images/avatar/female.jpg">Female One</option>
                <option value="/images/avatar/female_two.jpg">
                  Female Two
                </option>
              </select>
            </div>

            <div className="">
              <input
                className="w-80 lg:ml-4 cursor-pointer py-2 border-2 border-black  text-white mt-8 bg-black hover:text-black hover:bg-white"
                type="submit"
                value="Add Review"
              />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddReview;

AddReview.getLayout = function getLayout(page) {
  return <DashBoard>{page}</DashBoard>;
};
