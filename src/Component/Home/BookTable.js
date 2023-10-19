  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
  
const BookTable = () => {
    const handleBook = () => {
        toast.success("book a table");
    }
    return (
        <div className="container mx-auto">
             <div className="bg-gray-700 px-8 py-4  rounded-lg">
            <h1 className='text-center text-4xl mt-4 text-white font-bold'>Book A Table</h1>
             <div  className=" h-24  lg:flex lg:justify-between items-center my-7 ">
            <div>
                <input type="text" placeholder="Enter you email" className="border-b-2 rounded-lg px-5 py-2 focus:outline-none" />
            </div>
            <div>
                <select name="schedule" className="border-b-2 w-30 px-5 rounded-lg py-2 focus:outline-none focus:" >
  <option value="">1 Person</option>
  <option value="">2 Persons</option>
  <option value="">3 Persons</option>
  <option value="">4 Persons</option>
  <option value="">5 Persons</option>
  <option value="">6 Persons</option>
  <option value="">7 Persons</option>

</select>
            </div>
            <div>
                <input type="date" name="date" placeholder="" id="" className="border-b-2 rounded-lg w-30 px-5 py-2 focus:outline-none focus:"/>
           </div>
            
            <div>
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
                    <button className="py-2 px-6 rounded btn text-lg font-semibold " style={{ backgroundColor: "#c8a97e", color: "whitesmoke",  }} onClick={handleBook}>Book A Table</button>
                     <ToastContainer />
        </div>
       </div>
       </div>
    );
};

export default BookTable;