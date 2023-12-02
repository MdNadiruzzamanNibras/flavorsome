import { CountUp } from 'use-count-up'

const CountAll = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 ml-20 lg:ml-0 lg:grid-cols-5 mb-4'>
            <div>
                    <div>
                        <h1 style={{color:"#D1B000"}} className='text-5xl font-bold'><CountUp isCounting start={0} end={18} duration={13} /></h1>
                <p className='lg:font-medium lg:text-base uppercase'>Years of experienced</p>
                </div>
            </div>
                <div>
                    
                    <div>
                        <h1 style={{color:"#D1B000"}} className='text-5xl font-bold'><CountUp isCounting start={0} end={100} duration={13} /></h1>
                <p className='lg:font-medium lg:text-base'>MENUS/DISH
</p>
                </div>
            </div>
            <div>
                    <div>
                         <h1 style={{color:"#D1B000"}} className='text-5xl text-orange-300 font-bold'><CountUp isCounting start={0} end={50} duration={13} /></h1>
                <p className='lg:font-medium lg:text-base'>STAFFS</p>
               </div>
            </div>
            <div>
                    <div>
                        <h1 style={{color:"#D1B000"}} className='text-5xl font-bold'><CountUp isCounting start={5000} end={15000} duration={12} /></h1>
                <p className='lg:font-medium lg:text-base'>HAPPY CUSTOMERS
</p>
                </div>
            </div>
            
            <div >
                <p className='lg:font-medium lg:text-lg'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
        </div>
        </div>
    );
};

export default CountAll;