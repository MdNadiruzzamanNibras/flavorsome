import Image from 'next/image';
import errorpage from '../../public/images/notFound/404_page_cover.jpg'

const NotFound = () => {
    const router = useRouter();
    setTimeout(()=>{
        router.push("/")
    },3000)

    return (
        <div>
            
            <Image width={700} height={1000} src={errorpage}  alt='not found'/>
        </div>
    );
};

export default NotFound;