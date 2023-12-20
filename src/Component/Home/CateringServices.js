import cake from "../../../public/images/catarning/images (1).png";
import food from "../../../public/images/catarning/food_.png";
import meeting from "../../../public/images/catarning/meeting.png";
import Image from "next/image";

const CateringServices = () => {
  return (
    <div className="my-16 container mx-auto">
      <h1 className="lg:text-5xl lg:font-extrabold text-center">
        Catering Services
      </h1>
      <div className="lg:flex lg:justify-evenly lg:items-center my-8">
        <div className="text-center">
          <Image
            className="w-28 ml-28 md:ml-[330px] lg:ml-20 mb-7"
            src={cake}
            alt="Birthday Party"
          />
          <h3 className="text-xl mb-2 lg:font-bold">Birthday Party</h3>
          <p className="w-64 mx-auto">
            Even the all-powerful Pointing has no control over the blind texts;
            it is an almost unorthographic.
          </p>
        </div>
        <div className="text-center">
          <Image
            className="w-32 ml-32 md:ml-[330px] lg:ml-16 mb-2"
            src={meeting}
            alt="Business Meetings"
          />
          <h3 className="text-xl mb-2 lg:font-bold">Business Meetings</h3>
          <p className="w-64 mx-auto">
            Even the all-powerful Pointing has no control over the blind texts;
            it is an almost unorthographic.
          </p>
        </div>
        <div className="text-center">
          <Image
            className="w-24  ml-36 md:ml-[350px] lg:ml-20 mb-5 mt-5"
            src={food}
            alt="Wedding Party"
          />
          <h3 className="text-xl mb-2 lg:font-bold">Wedding Party</h3>
          <p className="w-64 mx-auto">
            Even the all-powerful Pointing has no control over the blind texts;
            it is an almost unorthographic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CateringServices;
