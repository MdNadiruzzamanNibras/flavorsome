import cake from '@/images/catarning/cake.jpg';
import food from '../images/catarning/food_.png'
import meeting from '../images/catarning/meeting.png'
import Image from 'next/image';


const CateringServices = () => {
    return (
        <div className='my-10'>
            <h1 className="lg:text-6xl lg:font-extrabold text-center">Catering Services</h1>
            <div className='flex justify-around'>
                <div className='text-center'>
                    <Image
                        className='w-20 h-22 ml-24'
  src={cake}

  alt="picture about "
/>
                    <h3 className='text-3xl lg:font-bold'>Birthday Party</h3>
                    <p className='w-64 text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.

</p>
                </div>
                <div className='text-center'>
                   <Image
                        className='w-32  ml-24'
  src={meeting}

  alt="picture about "
/>
                    <h3 className='text-3xl lg:font-bold'>Birthday Party</h3>
                    <p className='w-64 text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.

</p>
                </div>
                <div className='text-center'>
                    <Image
                        className='w-20 h-22'
  src={food}

  alt="picture about "
/>
                    <h3 className='text-3xl lg:font-bold'>Birthday Party</h3>
                    <p className='w-64 text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.

</p>
                </div>
                
            </div>
        </div>
    );
};

export default CateringServices;