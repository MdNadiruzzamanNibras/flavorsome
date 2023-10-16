import React from 'react';
import owner from '../../images/chef/male_one.jpg'
import Image from 'next/image';
import { LiaTwitter } from 'react-icons/lia';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const Master_Chef = () => {
    return (
        <div className='my-16'>
            <h1 className='text-center text-4xl font-bold'>Our Master Chef</h1>
            <div>
                <div className='w-64  '>
                    <Image src={owner} className="w-64 shadow-lg " alt="owner" />
                    <h4 className='text-xl font-bold my-2'>John Smooth</h4>
                    <p>Restaurant Owner</p>
                    <div className='flex items-center text-lg mt-3' style={{color:"#c8a97e"}}>
                        <p className='mr-3'><LiaTwitter/></p>
                        <p className='mr-3'><FaFacebookF/></p>
                        <p className='mr-3'><AiOutlineGoogle/></p>
                        <p className='mr-3'><BsInstagram/></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Master_Chef;