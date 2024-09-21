import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SAT", " SUN", "MON", "TUE", "WED", "THU", "FRI"];

  const [docInfo, setDocInfo] = useState(null);

  // Doctor slots //
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    // console.log(docInfo);
  };

  // get the doctor slots
  const getAvailableSlots = async () => {
    setDocSlots([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // Geeting date with index

      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Setting end time for the date with index

      let endTime = new Date();
      endTime.setDate(endTime.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // Setting the hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Add slot to array

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // increment current time by 30 min
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  // useEffect for Doctor Date & Time slots
  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        {/* ~~~~~~~~ Doctor Details ~~~~~~~~~ */}

        <div className=" flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className=" bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt="Doctor Image"
            />
          </div>

          <div className=" flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ">
            {/* ~~~~~~~~ Doctor info : name, degree, experience ~~~~~~~~~ */}
            <h1 className=" flex items-center gap-2 text-2xl font-medium text-gray-900 ">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </h1>

            <div className=" flex items-center gap-2 text-sm  mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className=" py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* ~~~~~~~~ Doctor About ~~~~~~~~~ */}

            <div className=" ">
              <h1 className=" flex items-center gap-1 mt-3 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} alt="" />
              </h1>

              <p className=" text-sm text-gray-500 max-w-[700] mt-1">
                Dr. Davis has a strong commitment to delivering comprehensive
                medical care, focusing on preventive medicine, early diagnosis,
                and effective treatment strategies. Dr. Davis has a strong
                commitment to delivering comprehensive medical care, focusing on
                preventive medicine, early diagnosis, and effective treatment
                strategies.
              </p>
            </div>
            <p className=" text-gray-500 font-medium mt-5">
              Appointment Fees: {currencySymbol}
              <span className=" text-gray-600  ">{docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* ~~~~~~~~ Schedule Details ~~~~~~~~~ */}

        <div className=" sm:ml-72 sm:pl-4 mt-5 font-medium text-gray-700">
          <h1>Booking Slot </h1>

          {/* Day name & Date */}
          <div className=" flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={` text-center py-6 min-w-16 rounded-full  cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white "
                      : "border border-gray-400"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* Visiting time */}

          <div className=" flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={` text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className=" bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:scale-105 duration-200 hover:shadow-md">
            Book an appointment
          </button>
        </div>
        {/* ~~~~~~~~ Related Doctors ~~~~~~~~~ */}
      </div>
    )
  );
};

export default Appointment;
