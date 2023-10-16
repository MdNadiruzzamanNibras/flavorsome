
import Image from "next/image";
import ch  from "../../images/menu/chiken_crispy.jpg"

const Menu = () => {
    return (
        <div className="my-20  ">
            <h1 className="text-6xl font-extrabold text-center my-7">Our Menu</h1>
             <div className=" ">
          <div className="  flex items-center rounded-lg border-2 w-[520px]  my-5">
            <div className="w-64 h-64">
              <Image src={ch} className="w-64 h-64" alt="Shoes" />
            </div>
            <div>
              <div className="flex w-64 h-64 justify-between">
                <div className="ml-2">
                  <h5>Grilled Beef <br /> with potatoes</h5> 
                </div>
                <div><h5 style={{color:"#c8a97e"}}> $29 </h5></div>
              </div>
            </div>
            </div>
             <div className="card w-72  bg-base-100 shadow-xl  ">
  <Image src={ch} className="w-72 h-72" alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
             <div className="card w-60 bg-base-100 shadow-xl ">
  <Image src={ch} className="w-60" alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
       </div>
       </div>
    );
};

export default Menu;