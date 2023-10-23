import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';



const RootLayout = ({ children }) => {
  
  const [open, setOpen] =useState(false)
  return (
    <div>
       
      <div className="shadow-md w-full fixed md:sticky top-0 left-0">
        <div className="md:flex md:justify-between md:items-center bg-white py-4">
          <div>
           <h1 className="text-3xl font-bold pl-7 md:ml-10"> Flavorsome</h1>
          </div>
          <div onClick={()=>setOpen(!open)} className="absolute text-2xl top-6 right-8 cursor-pointer md:hidden">
           {open? <h1><AiOutlineClose/></h1>:
            <h1> <AiOutlineMenu/></h1>}
          </div>
          <div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12
            absolute md:static bg-white lg:mr-40 md:mr-14 md:z-auto z-[-1] w-full
             md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in left-0 ${open ? 'top-14 opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
              
              <li>
             
             
      </li>
              <li>
              <Link className="ml-4 top-19" href="/">Home</Link>
             
      </li>
      <li className="ml-4">
         <Link href="/contact">
              Contact</Link>
      </li>
      <li className="ml-4">
         <Link href="/menu">
              Menu</Link>
      </li>
              
            </ul>
            </div>
        </div>
     </div>
      <div >{children}</div>
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
