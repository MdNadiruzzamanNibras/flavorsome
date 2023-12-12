import useAdmin from "@/Hook/useAdmin";
import auth from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdOutlinePermIdentity } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdNoFood } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import { LuClipboardList } from "react-icons/lu";
import { PiNotebookDuotone } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
const DashBoard = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userEmail"]);
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const logout = () => {
    signOut(auth);

    removeCookie("userEmail", { path: "/" });
    router.push("/");
  };
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-deepIndigo text-white">
        <div className="flex  flex-col h-full">
          <div className="flex-grow">
            <div className=" flex flex-col text-2xl text-start ml-10 mt-5">
              <h1 className="mb-3 flex items-center">
                <Link href="/dashboard">
                  <span className="text-3xl">
                    <MdOutlinePermIdentity />
                  </span>
                  <span className="ml-3">Profile</span>
                </Link>
              </h1>

              {user && !admin && (
                <>
                  <h1 className="my-3 flex items-center">
                    <Link href="/dashboard/review">
                      <span className="text-3xl">
                        <VscFeedback />
                      </span>
                      <span className="ml-3"> Review</span>
                    </Link>
                  </h1>
                  <h1 className="my-3 flex items-center">
                    <Link href="/dashboard/mybook">
                      <span className="text-3xl">
                        <BsFillJournalBookmarkFill />
                      </span>
                      <span className="ml-3">Book Table</span>
                    </Link>
                  </h1>
                  <h1 className="my-3 flex items-center">
                    <Link href="/order/myorder">
                      <span className="text-3xl">
                        <MdNoFood />
                      </span>
                      <span className="ml-3">My Order</span>
                    </Link>
                  </h1>
                </>
              )}

              {admin && (
                <>
                  <h1 className="my-3 flex items-center">
                    <Link href="/dashboard/addfood">
                      <span className="text-3xl">
                        {" "}
                        <BiSolidFoodMenu />
                      </span>
                      <span className="ml-3"> Add Food</span>
                    </Link>
                  </h1>
                  <h1 className="my-3 flex items-center">
                    <Link href="/dashboard/book">
                      <span className="text-3xl">
                        <PiNotebookDuotone />
                      </span>
                      <span className="ml-3"> Book Table</span>
                    </Link>
                  </h1>
                  <h1 className="my-3 flex items-center">
                    <Link href="/order">
                      <span className="text-3xl">
                        <LuClipboardList />
                      </span>
                      <span className="ml-3">All Order</span>
                    </Link>
                  </h1>
                </>
              )}
            </div>
          </div>
          <div className="flex-none">
            <div className=" flex mt-auto flex-col text-2xl text-start ml-10 ">
              <h1 className="my-3 flex items-center">
                <Link href="/">
                  <span className="text-3xl">
                    <FaHome />
                  </span>
                  <span className="ml-3">Home</span>
                </Link>
              </h1>
              <h1
                onClick={logout}
                className="mt-3 mb-32 flex items-center cursor-pointer "
              >
                <span className="text-3xl ">
                  <CgLogOut />
                </span>
                <span className="ml-3">Log Out</span>
              </h1>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashBoard;
