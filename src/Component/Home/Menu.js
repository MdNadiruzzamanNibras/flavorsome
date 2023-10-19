
import Image from "next/image";
import ch  from "../../images/menu/chiken_crispy.jpg"

const Menu = () => {
    return (
      <div className="container mx-auto">
         <div className="my-20  ">
            <h1 className="text-6xl font-extrabold text-center my-7">Our Menu</h1>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className="  lg:flex lg:items-center rounded-lg border-2 lg:w-[520px]   my-5">
            <div className="w-32 lg:w-64 lg:h-64">
              <Image src={ch} className="lg:w-64 lg:h-64" alt="Shoes" />
            </div>
            <div className="w-32 lg:w-64 lg:h-64">
              <div className="flex  justify-between text-xl font-bold mt-3">
                <div className="ml-2 ">
                  <h5 >Grilled Beef <br /> with potatoes</h5> 
                </div>
                <div><h5 style={{color:"#c8a97e"}}> $29 </h5></div>
              </div>
              <h4 className="text-lg mt-12 mx-3">Meat, Potatoes, Rice, Tomatoe</h4>
              <button style={{backgroundColor:"#c8a97e", color:"white"}} className=" py-2 px-5 mt-3 ml-3 font-bold">Order Now</button>
            </div>
            </div>
          <div className="  lg:flex lg:items-center rounded-lg border-2 lg:w-[520px]   my-5">
            <div className="w-32 lg:w-64 lg:h-64">
              <Image src={ch} className="lg:w-64 lg:h-64" alt="Shoes" />
            </div>
            <div className="w-32 lg:w-64 lg:h-64">
              <div className="flex  justify-between text-xl font-bold mt-3">
                <div className="ml-2 ">
                  <h5 >Grilled Beef <br /> with potatoes</h5> 
                </div>
                <div><h5 style={{color:"#c8a97e"}}> $29 </h5></div>
              </div>
              <h4 className="text-lg mt-12 mx-3">Meat, Potatoes, Rice, Tomatoe</h4>
              <button style={{backgroundColor:"#c8a97e", color:"white"}} className=" py-2 px-5 mt-3 ml-3 font-bold">Order Now</button>
            </div>
            </div>
          <div className="  lg:flex lg:items-center rounded-lg border-2 lg:w-[520px]   my-5">
            <div className="w-32 lg:w-64 lg:h-64">
              <Image src={ch} className="lg:w-64 lg:h-64" alt="Shoes" />
            </div>
            <div className="w-32 lg:w-64 lg:h-64">
              <div className="flex  justify-between text-xl font-bold mt-3">
                <div className="ml-2 ">
                  <h5 >Grilled Beef <br /> with potatoes</h5> 
                </div>
                <div><h5 style={{color:"#c8a97e"}}> $29 </h5></div>
              </div>
              <h4 className="text-lg mt-12 mx-3">Meat, Potatoes, Rice, Tomatoe</h4>
              <button style={{backgroundColor:"#c8a97e", color:"white"}} className=" py-2 px-5 mt-3 ml-3 font-bold">Order Now</button>
            </div>
            </div>
          <div className="  lg:flex lg:items-center rounded-lg border-2 lg:w-[520px]   my-5">
            <div className="w-32 lg:w-64 lg:h-64">
              <Image src={ch} className="lg:w-64 lg:h-64" alt="Shoes" />
            </div>
            <div className="w-32 lg:w-64 lg:h-64">
              <div className="flex  justify-between text-xl font-bold mt-3">
                <div className="ml-2 ">
                  <h5 >Grilled Beef <br /> with potatoes</h5> 
                </div>
                <div><h5 style={{color:"#c8a97e"}}> $29 </h5></div>
              </div>
              <h4 className="text-lg mt-12 mx-3">Meat, Potatoes, Rice, Tomatoe</h4>
              <button style={{backgroundColor:"#c8a97e", color:"white"}} className=" py-2 px-5 mt-3 ml-3 font-bold">Order Now</button>
            </div>
            </div>
             
            
       </div>
       </div>
       </div>
    );
};

export default Menu;