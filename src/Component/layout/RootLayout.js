import auth from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const RootLayout = ({ children }) => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userEmail"]);

  const logout = () => {
    signOut(auth);

    removeCookie("userEmail", { path: "/" });
  };
  const toggleMenu = () => {
    setOpen(!open);
  };
  const router = useRouter();
  const isPathActive = (path) => {
    return router.pathname === path
      ? "bg-black px-3 py-1 text-white rounded-lg"
      : "";
  };
  return (
    <div>
      <div className="shadow-md w-full top-0 left-0">
        <div
          className={`md:flex md:justify-between md:items-center  md:pb-5 bg-white py-4 ${
            open ? "pb-36" : "pb-3"
          }`}
        >
          <div>
            <h1 className="text-3xl font-bold  pl-7 md:ml-10">Flavorsome</h1>
          </div>
          <div
            onClick={toggleMenu}
            className="absolute text-2xl top-6 right-8 cursor-pointer md:hidden"
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
             bg-white lg:mr-40 md:mr-14  w-full md:w-auto md:pl-0 pl-9 transition-all
              duration-500 ease-in left-0 ${open ? "block" : "hidden"}`}
            >
              <li className={`ml-4 ${isPathActive("/")}`}>
                <Link href="/">Home</Link>
              </li>
              {user && (
                <li className={`ml-4 ${isPathActive("/dashboard")}`}>
                  <Link href="/dashboard">DashBoard</Link>
                </li>
              )}
              <li className={`ml-4 ${isPathActive("/contact")}`}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={`ml-4 ${isPathActive("/menu")}`}>
                <Link href="/menu">Menu</Link>
              </li>
              {user ? (
                <li onClick={logout} className="ml-4 cursor-pointer">
                  Log Out
                </li>
              ) : (
                <>
                  <li
                    className={`ml-4 cursor-pointer ${isPathActive("/login")}`}
                  >
                    <Link href="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
            {/* {
                drop && < ul className="absolute bg-white right-0  top-2 flex-col">
                  <li >login</li> <br />
                  <li>signout</li>
                
                </ul>
                } */}
          </div>
        </div>
      </div>
      <div>{children}</div>
      <footer className="footer px-10 py-24 bg-deepIndigo text-pastelPurple">
        <div className="container mx-auto">
          <div className="grid grid-cols-3">
            <nav className="flex flex-col w-full">
              <header className="text-4xl font-extrabold mb-10">
                Flavorsome
              </header>
              <p className="text-lg text-pastelPurple w-80">
                At Flavorsome, we invite you to embark on a journey of taste and
                delight.Our tables are more than just places.
              </p>
              <div>
                <h1>
                  <FaFacebookF />
                </h1>
                h
              </div>
            </nav>
            <nav>
              <header className="footer-title">Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">Social</header>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
