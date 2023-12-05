import Link from "next/link";


const DashBoard = ({children}) => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-black text-white">
                <div className=" flex flex-col text-center mt-5">
                    <h1><Link href='/'>home</Link></h1>
                    <h1><Link href='/dashboard'>Profile</Link></h1>
                    <h1><Link href='/dashboard/book'>home</Link></h1>
                    <h1><Link href='/'>home</Link></h1>
                    <h1><Link href='/'>home</Link></h1>
            </div>
            
            </div> <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default DashBoard;