import cake from '../../../public/images/catarning/images (1).png';
import food from '../../../public/images/catarning/food_.png';
import meeting from '../../../public/images/catarning/meeting.png';
import Image from 'next/image';

const CateringServices = () => {
    return (
        <div className='my-16 container mx-auto'>
            <h1 className="lg:text-6xl lg:font-extrabold text-center">Catering Services</h1>
            <div className='lg:flex lg:justify-evenly lg:items-center my-8'>
                <div className='text-center'>
                    <Image
                        className='w-28 ml-24 mb-7'
                        src={cake}
                        alt="Birthday Party"
                    />
                    <h3 className='text-3xl lg:font-bold'>Birthday Party</h3>
                    <p className='w-64 text-center'>
                        Even the all-powerful Pointing has no control over the blind texts; it is an almost unorthographic.
                    </p>
                </div>
                <div className='text-center'>
                    <Image
                        className='w-32 ml-16 mb-2'
                        src={meeting}
                        alt="Business Meetings"
                    />
                    <h3 className='text-3xl lg:font-bold'>Business Meetings</h3>
                    <p className='w-64 text-center'>
                        Even the all-powerful Pointing has no control over the blind texts; it is an almost unorthographic.
                    </p>
                </div>
                <div className='text-center'>
                    <Image
                        className='w-24 ml-24 mb-5 mt-5'
                        src={food}
                        alt="Wedding Party"
                    />
                    <h3 className='text-3xl lg:font-bold '>Wedding Party</h3>
                    <p className='w-64 text-center'>
                        Even the all-powerful Pointing has no control over the blind texts; it is an almost unorthographic.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CateringServices;
