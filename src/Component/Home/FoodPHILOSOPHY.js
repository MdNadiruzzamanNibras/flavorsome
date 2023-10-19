import Image from 'next/image';
import first from '../../images/philosphy/uper.jpg'
import two from '../../images/philosphy/down.jpg'

const FoodPHILOSOPHY = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-80 lg:mt-36'>
            
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-2'>
            <div className='lg:ml-72'>
                <Image src={two} className="w-72 h-96  relative " alt="food philosopy" />
                 <Image src={first} className="w-80 h-[400px]  absolute ml-24 mt-[-500px]" alt="food philosopy" />
                
               
                
            </div>
                <div >
                    <div >
                        <div className='flex items-center'>
                            <h6 style={{color:"#c8a97e"}} className='text-xl font-bold'>QUALITY & BALANCE</h6>
                            <hr style={{ backgroundColor: "#c8a97e" }} className='w-20 h-1 ml-8' />
                        </div>
                        <h2 className='text-4xl my-6 font-bold'>OUR FOOD PHILOSOPHY</h2>
                        <p className='text-lg mb-6'>Simple and balanced. Alexander Petillo brings together flavors and specialties from Italy and beyond to create his own culinary world, full of surprising artistry.</p>
                        <button style={{ backgroundColor: "#c8a97e" }} className='uppercase py-3 px-6 text-white font-semibold'>Learn more</button>
                    </div>
                    
            </div>
        </div>
        </div>
        </div>
    );
};

export default FoodPHILOSOPHY;