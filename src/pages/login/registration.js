import RootLayout from "@/Component/layout/RootLayout";
import auth from "@/firebase/firebase.config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [updateProfile, updating, UpError] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [cookies, setCookie] = useCookies(["userEmail"]);
  const router = useRouter();
  const location = router?.query?.from || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setCookie("userEmail", email);
    const user = { name: name, email: email };
    fetch("https://encouraging-pants-dog.cyclic.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Account create");
        } else {
          toast.error("Oh no try again later");
        }
      });
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  if (user) {
    router.replace(location);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lg:w-[400px] bg-base-200 shadow-lg py-6 pl-6">
        <h2 className="text-center text-2xl mb-11 font-bold">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Name</span>
            </label>
            <input
              type="text"
              required
              placeholder="Your Name"
              name="name"
              className="text-center py-2 w-80 my-2 focus:outline-none rounded border-gray-500 border-2 "
            />
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Email</span>
            </label>
            <input
              type="email"
              required
              placeholder="Your Email"
              name="email"
              className="text-center py-2 w-80 my-2 focus:outline-none rounded border-gray-500 border-2 "
            />
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="text-center py-2 w-80 my-2 focus:outline-none rounded border-gray-500 border-2 "
            />
          </div>
          <div className="flex justify-center">
            <input
              className="px-14 cursor-pointer py-2 border-2 border-black  text-white mt-8 bg-black hover:text-black hover:bg-white"
              type="submit"
            />
          </div>
        </form>
        <p className="my-4 ">
          Already Account{" "}
          <Link href="/login">
            <span className="text-blue-500 pl-2">Sign In</span>
          </Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Registration;

Registration.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
