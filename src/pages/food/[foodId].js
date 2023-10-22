import RootLayout from "@/Component/layout/RootLayout";
import Image from "next/image";


const foodDetail = ({food}) => {
    return (
        <div className="container mx-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-20">
                
                    <div className="lg:flex lg:justify-end">
                                                        <Image width={300} height={200} src={food.image_url} alt="food"/>

                    </div>
                    <div className="w-40 ">
                         
                    <h1 className=""> {food?.title}</h1>
                   
                    <input type="email" name="" className="border-2 focus:outline-2 text-center m" required placeholder="Qunatity" id="" />
                    <input type="number" name=""  className="border-2 focus:outline-2 text-center" required placeholder="Price" id="" />
                    <button>Payment</button>
                   </div>
            
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