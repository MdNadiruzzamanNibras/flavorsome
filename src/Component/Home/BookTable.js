  import auth from '@/firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
  
const BookTable = () => {
     const [selectedDate, setSelectedDate] = useState('');
   const [user] = useAuthState(auth);
    useEffect(() => {
        const today = new Date();
        const futureDate = new Date();
        
        
       
        const formattedDate = futureDate.toISOString().split('T')[0];
        
        setSelectedDate(formattedDate);
    }, []);

     const handleBook = (e) => {
        e.preventDefault(); 
        const email = e?.target?.email?.value;
        const schedule = e?.target?.schedule?.value;
        const date = e?.target?.date?.value;
        const person = e?.target?.person?.value;
        console.log(email, schedule, date, person, 'handlebook');
        toast.success("book a table");
    };
    return (
        <div className="container mx-auto">
             <div className="bg-gray-700 px-8 py-4  rounded-lg">
            <h1 className='text-center text-4xl mt-4 text-white font-bold'>Book A Table</h1>
             <form onSubmit={handleBook}  className="   lg:h-24  lg:flex lg:justify-between items-center my-7 ">
            <div className='flex justify-center lg:flex-none my-2 lg:my-0'>
                <input type="text" name='email'  value={user?.email} placeholder="Enter you email" className="border-b-2 rounded-lg px-5 py-2 focus:outline-none" />
            </div>
            <div className='flex justify-center lg:flex-none my-2 lg:my-0'>
                <select name="person" className="border-b-2 w-30 px-5 rounded-lg py-2 focus:outline-none focus:" >
  <option value="1 Person">1 Person</option>
  <option value="2 Persons">2 Persons</option>
  <option value="3 Persons">3 Persons</option>
  <option value="4 Persons">4 Persons</option>
  <option value="5 Persons">5 Persons</option>
  <option value="6 Persons">6 Persons</option>
  <option value="7 Persons">7 Persons</option>

</select>
            </div>
             <div className='flex justify-center lg:flex-none my-2 lg:my-0'>
                        <input
                            type="date"
                            name="date"
                            value={selectedDate}
                            min={selectedDate} 
                            className="border-b-2 rounded-lg w-30 px-5 py-2 focus:outline-none focus:"
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </div>
            
            <div className='flex justify-center lg:flex-none my-2 lg:my-0'>
                <select name="schedule" className="border-b-2 px-5 py-2 rounded-lg  w-30 focus:outline-none" >
  <option value="12:00 AM">12:00 AM</option>
  <option value="12:30 AM">12:30 AM</option>
  <option value="1:00 AM">1:00 AM</option>
  <option value="1:30 AM">1:30 AM</option>
  <option value="2:00 AM">1:30 AM</option>
  <option value="2:30 AM">1:30 AM</option>
  <option value="3:00 AM">1:30 AM</option>
  <option value="3:30 AM">1:30 AM</option>
  <option value="4:00 AM">1:30 AM</option>
  <option value="4:30 AM">1:30 AM</option>
  <option value="5:00 AM">1:30 AM</option>
  <option value="5:30 AM">1:30 AM</option>
  <option value="6:00 AM">1:30 AM</option>
  <option value="6:30 AM">1:30 AM</option>
  <option value="7:00 AM">1:30 AM</option>
  <option value="7:30 AM">1:30 AM</option>
  <option value="8:00 AM">1:30 AM</option>
  <option value="8:30 AM">1:30 AM</option>
</select>
            </div>
                    <div className='flex justify-center lg:flex-none my-2 lg:my-0'>
                        <button className="py-2 px-6  rounded btn text-lg 
                    font-semibold " style={{ backgroundColor: "#c8a97e", color: "whitesmoke", }} type='submit'>Book A Table</button>
                    </div>
                     <ToastContainer />
        </form>
       </div>
       </div>
    );
};

export default BookTable;