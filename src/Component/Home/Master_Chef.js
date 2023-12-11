import owner from "../../../public/images/chef/male_one.jpg";
import master from "../../../public/images/chef/women_one.jpg";
import chef_one from "../../../public/images/chef/male_two.jpg";
import chef_two from "../../../public/images/chef/male_three.jpg";
import Image from "next/image";
import { LiaTwitter } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Master_Chef = () => {
  const masterCheh = [
    { id: 1, name: "John Smooth", position: "Restaurant Owner", image: owner },
    {
      id: 2,
      name: "Rebeca Welson",
      position: "Head Chef",
      image: master,
    },
    { id: 3, name: "Kharl Branyt", position: "Chef", image: chef_one },

    { id: 4, name: "Luke Simon", position: "Chef", image: chef_two },
  ];
  return (
    <div className="my-16 container mx-auto">
      <h1 className="text-center text-4xl my-24 mr-20 font-extrabold">
        Our Master Chef
      </h1>
      <div className="grid lg:grid-cols-4 lg:ml-10 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {masterCheh?.map((chef) => (
          <div
            key={chef.id}
            className="w-80 md:w-64 mx-auto mt-2 md:ml-10 lg:ml-0 "
          >
            <Image
              src={chef.image}
              className=" w-80 md:w-64 h-96 lg:h-80 shadow-md "
              alt="owner"
            />
            <h4 className="text-xl font-bold ml-3 my-2">{chef.name}</h4>
            <p className="ml-3">{chef.position}</p>
            <div className="flex items-center text-book  ml-2 mt-3">
              <a href="" className="mr-3 text-3xl">
                <LiaTwitter />
              </a>
              <a href="" className="mr-3 text-xl">
                <FaFacebookF />
              </a>
              <a href="" className="mr-3 text-2xl">
                <AiOutlineGoogle />
              </a>
              <a href="" className="mr-3 text-2xl">
                <BsInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Master_Chef;
