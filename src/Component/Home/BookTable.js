
const BookTable = () => {
    const handleBook = () => {
        console.log("book a table");
    }
    return (
        <div  className=" h-24  flex justify-between items-center my-7 ">
            <div>
                <input type="text" placeholder="Enter you email" className="border-b-2 focus:outline-none" />
            </div>
            <div>
                <select name="schedule" className="border-b-2 w-30 focus:outline-none focus:" >
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
                <input type="date" name="date" placeholder="" id="" className="border-b-2 w-30 focus:outline-none focus:"/>
           </div>
            
            <div>
                <select name="schedule" className="border-b-2 w-30 focus:outline-none" >
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
            <button className="py-2 px-6 rounded-xl btn text-lg font-semibold " style={{backgroundColor:"#c8a97e", color:"whitesmoke"}} onClick={handleBook}>Book A Table</button>
        </div>
    );
};

export default BookTable;