import Image from "next/image";
import loading from "../../../public/images/Loading/loading.gif";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image src={loading} alt="loading" />
      </div>
    </div>
  );
};

export default Loading;
