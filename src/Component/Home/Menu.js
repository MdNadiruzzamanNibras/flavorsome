
import Image from "next/image";
import Link from "next/link";


const Menu = ({menuData}) => {
    return (
      <div className="container mx-auto">
         <div className="my-20  ">
            <h1 className="text-6xl font-extrabold text-center my-7">Our Menu</h1>
          
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
         
            { 
              menuData.slice(0, 4).map(food =>
                <div key={food.id} className="  flex items-center rounded-lg w-64 border-2 lg:w-[520px]   my-5">
            <div className="w-32 lg:w-64 lg:h-64">
              <Image width={256} height={256} src={food.image_url} className=" lg:w-64 lg:h-64" alt="menu" />
            </div>
            <div className="w-32 lg:w-64 lg:h-64">
              <div className="flex  justify-between text-xl font-bold mt-3">
                <div className="ml-2 ">
                        <h5 >{food.title }</h5> 
                </div>
                <div><h5 style={{color:"#c8a97e"}}> $29 </h5></div>
              </div>
              <h4 className="text-lg mt-12 mx-3">Meat, Potatoes, Rice, Tomatoe</h4>
                    <Link href={`food/${food?.id}`}>
                      <button style={{backgroundColor:"#c8a97e", color:"white"}} className=" py-2 px-5 mt-3 ml-3 font-bold">Order Now</button>
                    </Link>
            </div>
            </div>
                 

               )
         }
             
            
       </div>
            
       </div>
       </div>
    );
};

export default Menu;