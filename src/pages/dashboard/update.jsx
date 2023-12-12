import DashBoard from "@/Component/layout/DashBoard";
import auth from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const handleupdate = (event) => {
    event.preventDefault();

    const name = user?.displayName;
    const email = user?.email;
    const phone = event?.target?.phone?.value;
    const address = event?.target?.address?.value;

    const updateUser = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };

    fetch(`https://encouraging-pants-dog.cyclic.app/update/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Update your profile");
        }
        router.push("/dashboard");
      });
  };
  return (
    <div className="container mx-auto">
      <div className="card w-96  mt-20 mx-auto bg-base-100 shadow-xl">
        <h1 className="text-2xl font-bold text-center mt-4">
          Update your profile
        </h1>
        <div className="card-body" onSubmit={handleupdate}>
          <form>
            <input
              type="text"
              value={user?.displayName}
              className="text-center capitalize py-2 w-full my-4 focus:outline-none rounded border-gray-500 border-2 "
            />{" "}
            <br />
            <input
              type="text"
              value={user?.email}
              className="text-center py-2 w-full my-4 focus:outline-none rounded border-gray-500 border-2 "
            />{" "}
            <br />
            <input
              type="number"
              name="phone"
              placeholder="Your phone Number"
              className="text-center py-2 w-full my-4 focus:outline-none rounded border-gray-500 border-2 "
            />{" "}
            <br />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="text-center py-2 w-full my-4 focus:outline-none rounded border-gray-500 border-2 "
            />{" "}
            <br />
            <br />
            <div className="flex justify-center">
              <input
                className="px-8 rounded-md text-lg font-medium cursor-pointer py-2 border-2 border-black
             text-white mt-2 bg-black hover:text-black hover:bg-white"
                type="submit"
                value="Update"
              />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
UpdateProfile.getLayout = function getLayout(page) {
  return <DashBoard>{page}</DashBoard>;
};
