import Image from "next/image";
import { TfiCommentAlt } from "react-icons/tfi";
import post_one from "../../../public/images/posts/post_one.jpg";
const RecentPost = () => {
  return (
    <div className="container mx-auto">
      <div className="my-14">
        <h3 className="text-center text-4xl font-bold">Recent Posts</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 container">
          <div className="card w-96 mx-auto lg:mx-0 py-3 px-4  shadow-xl">
            <Image className="w-96 h-56" src={post_one} alt="post" />
            <div>
              <h4 className="text-lg font-medium text-gray-400">
                Sept. 06, 2019 Admin
              </h4>
              <h2 className="text-2xl font-bold text-black">
                Taste the delicious foods in Asia
              </h2>
              <div className="flex justify-between items-center">
                <div>
                  <button>Read more..</button>{" "}
                </div>
                <div className="flex  items-center">
                  <TfiCommentAlt /> <p className="ml-1"> 3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 mx-auto  lg:mx-0 py-3 px-4  shadow-xl">
            <Image className="w-96 h-56" src={post_one} alt="post" />
            <div>
              <h4 className="text-lg font-medium text-gray-400">
                Sept. 06, 2019 Admin
              </h4>
              <h2 className="text-2xl font-bold text-black">
                Taste the delicious foods in Asia
              </h2>
              <div className="flex justify-between items-center">
                <div>
                  <button>Read more..</button>{" "}
                </div>
                <div className="flex  items-center">
                  <TfiCommentAlt /> <p className="ml-1"> 3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96  mx-auto  lg:mx-0 py-3 px-4  shadow-xl">
            <Image className="w-96 h-56" src={post_one} alt="post" />
            <div>
              <h4 className="text-lg font-medium text-gray-400">
                Sept. 06, 2019 Admin
              </h4>
              <h2 className="text-2xl font-bold text-black">
                Taste the delicious foods in Asia
              </h2>
              <div className="flex justify-between items-center">
                <div>
                  <button>Read more..</button>{" "}
                </div>
                <div className="flex  items-center">
                  <TfiCommentAlt /> <p className="ml-1"> 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
