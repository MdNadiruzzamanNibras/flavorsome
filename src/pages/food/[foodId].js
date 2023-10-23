import RootLayout from "@/Component/layout/RootLayout";
import Image from "next/image";
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const foodDetail = ({ food }) => {

    const handleOrder= () => {
        toast.success("Thanks your order complete");
    }
    return (
        <div className="container mx-auto h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-20  pt-5 w-[450px] mx-auto bg-base-100 shadow-lg">
                
                    <div className="lg:flex lg:justify-end ">
            <div className="h-64 w-64 ml-6">
              <Image width={200} height={0} src={food.image_url} alt="food"/>

                                                        </div>
                    </div>
                    <div className="w-40 ">
                         
                    <h1 className=" text-2xl text-center"> {food?.title}</h1>
                   
                    <input type="email" name="" className="border-2 my-4 focus:outline-2 text-center m" required placeholder="Your Email" id="" />
                    <input type="number" name=""  className="border-2 focus:outline-none text-center" readOnly value={food.price} id="" />
            <div className="flex justify-center mt-4">
              <button onClick={handleOrder} className="bg-black text-white font-semibold  hover:bg-white hover:text-black hover:font-semibold px-4 py-2 rounded-lg border-black border-2">Order</button>
                    </div>
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

    const res = await fetch(`https://encouraging-pants-dog.cyclic.app/menus/${params?.foodId}`);
  const data = await res.json();
  
   if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
    return {
      props: {
        
        food: data
      },
    };
};