import Image from 'next/image';
import map from '../../../public/images/map/Mapz.png'

const ContactDetail = () => {
    return (
        <div className='container mx-auto'>
            <div className='my-20'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-end'>
                    <Image className='w-[400px] h-[500px]'  src={map} alt='map'/>
                </div>
                    <div>
                       <div className="lg:w-[700px] ml-6">
                    <div >
                    <h4 className=" text-4xl font-semibold">Contact Us

                    </h4>
                    
                    
                        <form  className="my-14">
                             <div>
            
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 my-4 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name*" required/>
        </div>  

                            
                            <div>
            
            <input type="email" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 my-4 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email*" required/>
                                </div>  
                                <div>
            
            <input type="Number" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 my-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Phone Number*" required/>
        </div>  
                            
                            <div>
            
            <textarea type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 my-4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  pb-14" placeholder="Your Name*" required/>
                            </div>  
                            
                            
                            <div className=' my-2'>
                                <button className="px-5 py-2 text-white bg-black hover:text-black border-black border-2 hover:bg-white text-lg flex items-center"> <span className='ml-3'>Contact us</span></button>
                            </div>
                        </form>
                </div>
                </div>
                </div>
                </div>
                <div className='lg:w-[900px] mx-auto my-20' >
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        <div>
                            <h4 className='text-xl'><span className='font-bold'>Address:</span> <span className='block font-medium'>Rangpur,Bangldesh</span></h4> 
                        </div>
                        <div>
                            <h4 className='text-xl'><span className='font-bold'>Phone:</span> <span className='block font-medium'>+880-1783-014828</span></h4> 
                        </div>
                        <div>
                            <h4 className='text-xl'><span className='font-bold'>Address:</span> <span className='inline-block font-medium'>nadiruzzamannibras@gmail.com</span></h4> 
                        </div>
                        
                       
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;