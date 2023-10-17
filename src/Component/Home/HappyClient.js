import React from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import man_one from '../../images/avatar/images.jpg'
import man_tw from '../../images/avatar/image_2.jpg'

import Image from 'next/image';
const HappyClient = () => {
    return (
        <div className='my-20'>
            <h3 className='text-center text-4xl font-bold'>Happy Customer</h3>
            <div className='grid lg:grid-cols-3 my-6 container'>
            
            <div className="card w-96 h-64 flex items-center bg-base-100 py-3 px-4  shadow-xl">
            
                <div className="avatar my-2">
                    <div className="w-16 rounded-full">
                        <Image src={man_one} alt="Avatar" />
                    </div>
                    
                </div>
                <p className='mb-2 mt-4 mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cupiditate rerum iste excepturi omnis nostrum minima unde molestias vel accusamus eum itaque fuga!</p>
                <h4 className=' flex items-center'><HiOutlineMinus/> <span className='text-2xl font-semibold'>Ian Boner</span></h4>
            </div>
            <div className="card w-96 h-64 flex items-center bg-base-100 py-3 px-4  shadow-xl">
            
                <div className="avatar my-2">
                    <div className="w-16 rounded-full">
                        <Image src={man_tw} alt="Avatar" />
                    </div>
                    
                </div>
                <p className='mb-2 mt-4 mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cupiditate rerum iste excepturi omnis nostrum minima unde molestias vel accusamus eum itaque fuga!</p>
                 <h4 className=' flex items-center'><HiOutlineMinus/> <span className='text-2xl font-semibold'>Mark Wood</span></h4>
            </div>
            <div className="card w-96 h-64 flex items-center bg-base-100 py-3 px-4  shadow-xl">
            
                <div className="avatar my-2">
                    <div className="w-16 rounded-full">
                        <Image src={man_one} alt="Avatar" />
                    </div>
                    
                </div>
                <p className='mb-2 mt-4 mx-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cupiditate rerum iste excepturi omnis nostrum minima unde molestias vel accusamus eum itaque fuga!</p>
                 <h4 className=' flex items-center'><HiOutlineMinus/> <span className='text-2xl font-semibold'>Jason Roy</span></h4>
            </div>
        </div>
        </div>
       
    );
};

export default HappyClient;