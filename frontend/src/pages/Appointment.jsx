import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

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
            <p className=" text-gray-500 font-medium mt-4">
              Appointment Fees: {currencySymbol}{" "}
              <span className=" text-gray-600">{docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* ~~~~~~~~ Schedule Details ~~~~~~~~~ */}
        {/* ~~~~~~~~ Related Doctors ~~~~~~~~~ */}
      </div>
    )
  );
};

export default Appointment;
