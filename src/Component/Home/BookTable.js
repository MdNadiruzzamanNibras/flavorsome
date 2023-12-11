import auth from "@/firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import process from "../../../public/images/book/Process-bg.png";
import note from "../../../public/images/book/note.png";
import Image from "next/image";
const BookTable = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [user] = useAuthState(auth);
  useEffect(() => {
    const today = new Date();
    const futureDate = new Date();

    const formattedDate = futureDate.toISOString().split("T")[0];

    setSelectedDate(formattedDate);
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    const name = user?.displayName;
    const email = e?.target?.email?.value;
    const schedule = e?.target?.schedule?.value;
    const date = e?.target?.date?.value;
    const person = e?.target?.person?.value;
    const booktable = {
      name: name,
      email: email,
      schedule: schedule,
      date: date,
      person: person,
    };

    fetch(`https://encouraging-pants-dog.cyclic.app/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booktable),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("book a table");
        } else {
          toast.error("Oh no try again later");
        }
      });
  };
  return (
    <div>
      <div>
        <Image
          src={process}
          alt="background"
          className="w-full h-[500px]  lg:h-full relative"
        />
        <div className="container mx-auto absolute m">
          <div className="lg:grid lg:grid-cols-2 mx-9 md:mx-0 absolute mt-[-480px]  lg:mt-[-800px]">
            <div>
              <Image
                className=" hidden lg:block lg:ml-44"
                src={note}
                alt="note"
              />
            </div>
            <div className=" px-8 py-4 lg:ml-64  rounded-lg">
              <h1 className="text-center text-2xl md:text-3 lg:text-4xl md:mb-8 lg:mt-4 text-white font-bold">
                Book Table
              </h1>
              <form onSubmit={handleBook} className="     lg:my-7 ">
                <div className=" md:ml-20 lg:ml-0 md:grid md:grid-cols-2 lg:grid-cols-1">
                  <div className="flex justify-center lg:flex-none my-2 lg:my-0">
                    <input
                      type="text"
                      name="email"
                      value={user?.email}
                      placeholder="Enter you email"
                      className="border-2 border-deepIndigo  lg:text-2xl lg:font-bold font-medium text-white lg:w-[530px] lg:h-20 my-5
                     bg-deepIndigo text-center rounded-lg px-2 text-lg lg:px-5 lg:py-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-center lg:flex-none my-2 lg:my-0">
                    <select
                      name="person"
                      className="border-2 border-deepIndigo lg:text-2xl lg:font-bold font-medium text-white lg:w-[530px] lg:h-20 my-5 md:text-xl bg-deepIndigo text-center rounded-lg px-2 text-lg lg:px-5 lg:py-2 focus:outline-none"
                    >
                      <option value="1 Person">1 Person</option>
                      <option value="2 Persons">2 Persons</option>
                      <option value="3 Persons">3 Persons</option>
                      <option value="4 Persons">4 Persons</option>
                      <option value="5 Persons">5 Persons</option>
                      <option value="6 Persons">6 Persons</option>
                      <option value="7 Persons">7 Persons</option>
                    </select>
                  </div>
                  <div className="flex justify-center lg:flex-none my-2 lg:my-0">
                    <input
                      type="date"
                      name="date"
                      value={selectedDate}
                      min={selectedDate}
                      className="border-2 md:text-xl border-deepIndigo lg:text-2xl lg:font-bold font-medium text-white lg:w-[530px] lg:h-20 my-5
                     bg-deepIndigo text-center rounded-lg px-2 text-lg lg:px-5 lg:py-2 focus:outline-none"
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-center lg:flex-none my-2 lg:my-0">
                    <select
                      name="schedule"
                      className="border-2 md:text-xl border-deepIndigo lg:text-2xl lg:font-bold font-medium text-white lg:w-[530px] lg:h-20 my-5
                     bg-deepIndigo text-center rounded-lg px-2 text-lg lg:px-5 lg:py-2 focus:outline-none"
                    >
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
                </div>
                <div className="flex justify-center lg:flex-none my-2 lg:my-0">
                  <button
                    className="border-2 md:text-xl border-deepIndigo lg:text-2xl lg:font-bold font-medium text-white lg:w-[530px] lg:h-20 my-5 hover:bg-indigo-900  bg-deepIndigo text-center rounded-lg px-2 text-lg lg:px-5 lg:py-2 focus:outline-none"
                    type="submit"
                  >
                    Book A Table
                  </button>
                </div>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
