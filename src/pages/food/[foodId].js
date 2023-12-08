/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/Component/layout/RootLayout";
import auth from "@/firebase/firebase.config";

import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const foodDetail = ({ food }) => {
  const [user] = useAuthState(auth);

  const handleOrder = (e) => {
    e.preventDefault();

    const price = e?.target?.price?.value;
    let qunatity = e?.target?.qunatity?.value;

    const order = {
      email: user?.email,
      name: food?.title,
      image: food.image_url,
      qunatity: qunatity,
      price: price * qunatity,
    };
    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("book a table");
        } else {
          toast.error("Oh no try again later");
        }
      });
  };
  return (
    <div className="container mx-auto h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-20  pt-5 w-[450px] mx-auto bg-base-100 shadow-lg">
        <div className="lg:flex lg:justify-end ">
          <div className="h-64 w-64 ml-6">
            <Image width={200} height={0} src={food.image_url} alt="food" />
          </div>
        </div>
        <div className="w-40 ">
          <h1 className=" text-2xl text-center"> {food?.title}</h1>

          <form onSubmit={handleOrder}>
            <input
              type="number"
              name="price"
              className="border-2  focus:outline-none text-center"
              readOnly
              value={food.price}
              id=""
            />
            <input
              type="number"
              name="qunatity"
              className="border-2 my-4 focus:outline-none text-center"
              placeholder="write quantity"
              id=""
            />
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-black text-white font-semibold  hover:bg-white hover:text-black hover:font-semibold px-4 py-2 rounded-lg border-black border-2"
              >
                Order
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default foodDetail;

foodDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://encouraging-pants-dog.cyclic.app/menus/${params?.foodId}`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return {
    props: {
      food: data,
    },
  };
};
