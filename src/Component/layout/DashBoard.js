import useAdmin from "@/Hook/useAdmin";
import auth from "@/firebase/firebase.config";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

const DashBoard = ({ children }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-black text-white">
        <div className="flex  flex-col justify-between">
          <div className=" flex flex-col text-2xl text-center mt-5">
            <h1 className="mb-3">
              <Link href="/dashboard">Profile</Link>
            </h1>

            {user && !admin && (
              <>
                <h1 className="my-3">
                  <Link href="/dashboard/review">Review</Link>
                </h1>
                <h1 className="my-3">
                  <Link href="/dashboard/mybook">Book Table</Link>
                </h1>
                <h1 className="my-3">
                  <Link href="/order/myorder">My Order</Link>
                </h1>
              </>
            )}

            {admin && (
              <>
                <h1 className="my-3">
                  <Link href="/dashboard/addfood">Add Food</Link>
                </h1>
                <h1 className="my-3">
                  <Link href="/dashboard/book">Book Table</Link>
                </h1>
                <h1 className="my-3">
                  <Link href="/order">All Order</Link>
                </h1>
              </>
            )}
          </div>
          <div className=" flex flex-col text-2xl text-center ">
            <h1 className="my-3">
              <Link href="/">Home</Link>
            </h1>
          </div>
        </div>
      </div>{" "}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashBoard;
