/* eslint-disable react-hooks/rules-of-hooks */
import DashBoard from "@/Component/layout/DashBoard";
import useAdmin from "@/Hook/useAdmin";
import auth from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { useAuthState } from "react-firebase-hooks/auth";
// import Avatar from "react-avatar";

const ProfilePage = ({ personaldata }) => {
  const [user, loading] = useAuthState(auth);
  const [cookies, setCookie] = useCookies(["userEmail"]);
  const router = useRouter();
  if (!user && loading) {
    return <p>loading...</p>;
  }
  const email = user?.email;
  if (user && cookies.userEmail !== user?.email) {
    setCookie("userEmail", email);
  }

  const firstWord = personaldata?.name?.trim()?.charAt(0);

  const handleUpdate = () => {
    router.push("/dashboard/update");
  };
  const styles = {
    fontFamily: "'Dhurjati', 'Lato', 'Poppins', 'Roboto Slab', sans-serif",
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-20">
        <div className="bg-white w-[600px] h-[450px] shadow-lg shadow-gray-300 rounded-lg">
          <div className="ml-10 mt-10">
            <div>
              <div>
                <h4 style={styles} className="text-3xl">
                  Hey!!!
                </h4>
                <h4 style={styles} className="text-3xl capitalize">
                  {personaldata?.name}
                </h4>
              </div>
              <div></div>
            </div>

            <div className="flex">
              <div>
                <div
                  className="w-24 h-24 rounded-full text-white
             bg-deepIndigo border-4 border-gray-50 mt-6 flex justify-center items-center"
                >
                  <h1
                    style={styles}
                    className="text-white uppercase text-4xl font-bold"
                  >
                    {firstWord}
                  </h1>
                </div>
                <div>
                  <button
                    onClick={handleUpdate}
                    className="px-8 rounded-md text-lg font-medium 
                    cursor-pointer py-2 border-2 border-deepIndigo
             text-white mt-2 bg-deepIndigo hover:text-deepIndigo hover:bg-white"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="ml-10 mt-8">
                <div className="flex flex-col  ">
                  <h5 className="text-lg font-semibold">Name:</h5>
                  <h5 className="text-xl capitalize font-bold">
                    {personaldata?.name ? personaldata?.name : "------"}
                  </h5>
                </div>
                <div className="flex flex-col my-4  ">
                  <h5 className="text-lg font-semibold">Emaiil:</h5>
                  <h5 className="text-xl font-bold">
                    {personaldata?.email ? personaldata?.email : "------"}
                  </h5>
                </div>
                <div className="flex flex-col my-4  ">
                  <h5 className="text-lg font-semibold">Address:</h5>
                  <h5 className="text-xl font-bold">
                    {personaldata?.address ? personaldata?.address : "------"}
                  </h5>
                </div>
                <div className="flex flex-col my-4  ">
                  <h5 className="text-lg font-semibold">Phone:</h5>
                  <h5 className="text-xl font-bold">
                    {personaldata?.phone ? personaldata?.phone : "------"}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <DashBoard>{page}</DashBoard>;
};

export const getServerSideProps = async ({ req }) => {
  try {
    const userEmail = req.headers.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("userEmail="))
      ?.split("=")[1];

    if (!userEmail) {
      throw new Error("User email not found");
    }

    const res = await fetch(
      `https://encouraging-pants-dog.cyclic.app/profile/${userEmail}`
    );

    const personaldata = await res.json();

    return {
      props: {
        personaldata,
      },
    };
  } catch (error) {
    return {
      props: {
        personaldata: [],
      },
    };
  }
};
