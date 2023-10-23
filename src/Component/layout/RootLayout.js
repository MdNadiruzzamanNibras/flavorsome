import Link from "next/link";



const RootLayout = ({ children }) => {
  // let Alllink = [
  //   {
  //     name: "Home",
  //     Links: '/',
  //     id:1
  //   },
  //   {
  //     name: "Menu",
  //     Link: '/menu',
  //     id:2
  //   },
  //   {
  //     name: "Contact",
  //     Links: '/contact',
  //     id:3
  //   }
    
  // ]
  return (
    <div>
       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <Link href="/">
              <p>Home</p></Link>
              <Link href="/contact">
              <p>Contact</p></Link>
              <Link href="/menu">
              <p>Menu</p></Link>
      
      </ul>
    </div>
          <a className="btn btn-ghost normal-case text-xl">
            Flavorsome</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="lg:flex  items-center">
      <li>
              <Link href="/">Home</Link>
             
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
  <div className="navbar-end">
    <></>
  </div>
</div>
      {/* <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex md:justify-between md:items-center bg-white py-4">
          <div>
            the food
          </div>
          <div>
            <h1><AiOutlineMenu/></h1>
            <h1><AiOutlineClose/></h1>
          </div>
          <div>
            <ul className="md:flex md:items-center md:pb-0 pb-12
            absolute md:static bg-white md:z-auto z-[-1] w-full
             md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in left-0">
              {Alllink.map((a)=>
              <li key={a.id}>
                  <Link href={a?.Links}>{ a.name}</Link>
                </li>
              )
                
              }
              
            </ul>
            </div>
        </div>
     </div> */}
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
