
import Image from "next/image";
import ch  from "../../images/menu/chiken_crispy.jpg"

const Menu = () => {
    return (
        <div className="my-20  container">
            <h1 className="text-6xl font-extrabold text-center my-7">Our Menu</h1>
             <div className="grid grid-cols-3 ">
             <div className="card w-72 bg-base-100 shadow-xl ">
  <Image src={ch} className="w-72 h-72" alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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