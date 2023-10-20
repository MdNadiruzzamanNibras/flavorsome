
import owner from '../../../public/images/chef/male_one.jpg'
import master from '../../../public/images/chef/women_one.jpg'
import chef_one from '../../../public/images/chef/male_two.jpg'
import chef_two from '../../../public/images/chef/male_three.jpg'
import Image from 'next/image';
import { LiaTwitter } from 'react-icons/lia';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const Master_Chef = () => {
    return (
        <div className='my-16 container mx-auto'>
            <h1 className='text-center text-4xl font-bold'>Our Master Chef</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                <div className='w-64  '>
                    <Image src={owner} className="w-64 h-80 shadow-md " alt="owner" />
                    <h4 className='text-xl font-bold ml-3 my-2'>John Smooth</h4>
                    <p className='ml-3'>Restaurant Owner</p>
                    <div className='flex items-center  ml-2 mt-3' style={{color:"#c8a97e"}}>
                        <a href='' className='mr-3 text-3xl'><LiaTwitter/></a>
                        <a href='' className='mr-3 text-xl'><FaFacebookF/></a>
                        <a href='' className='mr-3 text-2xl'><AiOutlineGoogle/></a>
                        <a href='' className='mr-3 text-2xl'><BsInstagram/></a>
                    </div>
                </div>
                <div className='w-64  '>
                    <Image src={master} className="w-64 h-80 shadow-md " alt="owner" />
                    <h4 className='text-xl font-bold ml-3 my-2'>Rebeca Welson</h4>
                    <p className='ml-3'>Head Chef</p>
                    <div className='flex items-center  ml-2 mt-3' style={{color:"#c8a97e"}}>
                        <a href='' className='mr-3 text-3xl'><LiaTwitter/></a>
                        <a href='' className='mr-3 text-xl'><FaFacebookF/></a>
                        <a href='' className='mr-3 text-2xl'><AiOutlineGoogle/></a>
                        <a href='' className='mr-3 text-2xl'><BsInstagram/></a>
                    </div>
                </div>
                <div className='w-64  '>
                    <Image src={chef_one} className="w-64 h-80 shadow-md " alt="owner" />
                    <h4 className='text-xl font-bold ml-3 my-2'>Kharl Branyt</h4>
                    <p className='ml-3'>Chef</p>
                    <div className='flex items-center  ml-2 mt-3' style={{color:"#c8a97e"}}>
                        <a href='' className='mr-3 text-3xl'><LiaTwitter/></a>
                        <a href='' className='mr-3 text-xl'><FaFacebookF/></a>
                        <a href='' className='mr-3 text-2xl'><AiOutlineGoogle/></a>
                        <a href='' className='mr-3 text-2xl'><BsInstagram/></a>
                    </div>
                </div>
                <div className='w-64  '>
                    <Image src={chef_two} className="w-64 h-80 shadow-md " alt="owner" />
                    <h4 className='text-xl font-bold ml-3 my-2'>Luke Simon</h4>
                    <p className='ml-3'>Chef</p>
                    <div className='flex items-center  ml-2 mt-3' style={{color:"#c8a97e"}}>
                        <a href='' className='mr-3 text-3xl'><LiaTwitter/></a>
                        <a href='' className='mr-3 text-xl'><FaFacebookF/></a>
                        <a href='' className='mr-3 text-2xl'><AiOutlineGoogle/></a>
                        <a href='' className='mr-3 text-2xl'><BsInstagram/></a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Master_Chef;