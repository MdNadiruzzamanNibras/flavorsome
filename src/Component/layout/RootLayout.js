import auth from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";

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
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <nav className="flex flex-col w-full">
              <header className="text-4xl font-extrabold mb-10">
                Flavorsome
              </header>
              <p className="text-lg  w-80">
                At Flavorsome, we invite you to embark on a journey of taste and
                delight.Our tables are more than just places.
              </p>
              <div className="flex mt-6 text-2xl items-center">
                <a
                  href="https://www.facebook.com/MdNadiruzzamanNibras/"
                  className="mx-3 bg-deepBlue p-2 rounded-md hover:text-pastelPurple"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com/"
                  className="mx-3 bg-deepBlue p-2 rounded-md"
                >
                  <BsTwitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="mx-3 bg-deepBlue p-2 rounded-md"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="mx-3  bg-deepBlue p-2 rounded-md"
                >
                  <IoLogoYoutube />
                </a>
              </div>
            </nav>
            <nav className="flex flex-col mt-10 lg:mt-0 lg:ml-20">
              <header className="text-2xl font-bold mb-10">Quick Link</header>
              <a
                href="https://www.youtube.com/"
                className=" text-xl my-1 font-semibold"
              >
                My Account
              </a>
              <a
                href="https://www.youtube.com/"
                className=" text-xl my-1 font-semibold"
              >
                About Us
              </a>
              <a
                href="https://www.youtube.com/"
                className="text-xl my-1 font-semibold "
              >
                Store Locator
              </a>
              <a
                href="https://www.youtube.com/"
                className="text-xl my-1 font-semibold "
              >
                Delivery
              </a>
              <a
                href="https://www.youtube.com/"
                className="text-xl my-1 font-semibold "
              >
                Pickup
              </a>
            </nav>
            <nav className="flex flex-col mt-10 lg:mt-0 lg:ml-30">
              <header className="text-2xl font-bold mb-10">
                Terms & Privacy
              </header>
              <a href="#" className=" text-xl my-1 font-semibold">
                Trust & Safety
              </a>
              <a
                href="https://www.youtube.com/"
                className=" text-xl my-1 font-semibold"
              >
                Terms of Service
              </a>
              <a
                href="https://www.youtube.com/"
                className="text-xl my-1 font-semibold "
              >
                Privacy Policy
              </a>
            </nav>
            <nav className="mt-10 lg:mt-0">
              <header className="text-2xl font-bold mb-10">
                Subscribe our Newsletter
              </header>
              <div className="grid grid-flow-col gap-4">
                <div className="md:flex md:items-center">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="text-center md:px-8  py-3 text-lg font-semibold rounded-lg"
                  />{" "}
                  <button className="md:px-5 py-3 text-lg ml-5 rounded bg-indigo-950">
                    Subscribe
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
