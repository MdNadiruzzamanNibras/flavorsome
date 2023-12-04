import auth from "@/firebase/firebase.config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";


const Login = () => {
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
 
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
       
       signInWithEmailAndPassword(email, password)
    };
      const router = useRouter();
    const location = router?.query?.from || '/';
    if (user) {
    router.replace(location);
  }
    console.log(user,
      loading,
      error,);
    return (
         <div className="flex justify-center items-center h-screen">
            <div className="lg:w-[400px] bg-base-200 shadow-lg py-6 pl-6">
                <h2 className="text-center text-2xl mb-11 font-bold">Registration</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Email</span>
            </label>
            <input type="email" required placeholder="Your Email" name="email" className="text-center py-2 w-80 my-2 focus:outline-none rounded border-gray-500 border-2 "  />
            
          </div>
                    <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Password</span>
            </label>
            <input type="password" name="password" required placeholder="Password" className="text-center py-2 w-80 my-2 focus:outline-none rounded border-gray-500 border-2 "  />
            
                    </div>
                    <div className="flex justify-center">
            <input  className="px-14 cursor-pointer py-2 border-2 border-black  text-white mt-8 bg-black hover:text-black hover:bg-white" type="submit" />
          </div>
          </form>
          <p className="my-4">New Flavorsome <Link href='/login/registration'><span className="text-blue-500">Sign Up</span></Link></p>
            </div>
        </div>
    );
};

export default Login;