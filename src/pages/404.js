import Image from 'next/image';
import errorpage from '../../public/images/notFound/404_page_cover.jpg'
// import { useRouter } from 'next/router';

const NotFound = () => {
    // const router = useRouter();
    // setTimeout(()=>{
    //     router.push("/")
    // },3000)

    return (
        <div className='container mx-auto'>
             <div className='flex justify-center items-center h-screen'>
            
            <Image width={900}  height={1200} src={errorpage}  alt='not found'/>
        </div>
       </div>
    );
};

export default NotFound;