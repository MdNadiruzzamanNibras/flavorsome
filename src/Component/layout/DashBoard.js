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
        <div className=" flex flex-col text-center mt-5">
          <h1>
            <Link href="/dashboard">Profile</Link>
          </h1>

          {user && !admin && (
            <>
              <h1>
                <Link href="/dashboard/review">Review</Link>
              </h1>
              <h1>
                <Link href="/dashboard/book">Book Table</Link>
              </h1>
            </>
          )}

          {admin && (
            <>
              <h1>
                <Link href="/dashboard/addfood">Add Food</Link>
              </h1>
              <h1>
                <Link href="/dashboard/book">Book Table</Link>
              </h1>
            </>
          )}

          <div>
            <h1 className="mt-6">
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
