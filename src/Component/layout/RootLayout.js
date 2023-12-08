import auth from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
  return (
    <div>
      <div className="shadow-md w-full top-0 left-0">
        <div className="md:flex md:justify-between md:items-center bg-white py-4">
          <div>
            <h1 className="text-3xl font-bold pl-7 md:ml-10">Flavorsome</h1>
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
             bg-white lg:mr-40 md:mr-14  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in left-0 ${
               open ? "block" : "hidden"
             }`}
            >
              <li>
                <Link className="ml-4" href="/">
                  Home
                </Link>
              </li>
              {user && (
                <li className="ml-4">
                  <Link href="/dashboard">DashBoard</Link>
                </li>
              )}
              <li className="ml-4">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="ml-4">
                <Link href="/menu">Menu</Link>
              </li>
              {user ? (
                <li onClick={logout} className="ml-4 cursor-pointer">
                  Log Out
                </li>
              ) : (
                <li className="ml-4 hover:cursor-pointer">
                  <Link href="/login">Login</Link>
                </li>
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
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default RootLayout;
