import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "20-07-2024",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className=" max-w-lg flex flex-col gap-2 text-base">
      {/* user image */}
      <img className=" w-36 rounded" src={userData.image} alt="Profile Image" />

      {/* user name */}
      {isEdit ? (
        <input
          className=" bg-gray-100 text-3xl font-medium max-w-60 mt-4 outline-gray-300 outline-offset-4"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
          type="text"
        />
      ) : (
        <p className=" text-3xl font-medium text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className=" bg-zinc-400 h-[1px] border-none" />

      {/* contact info */}
      <div>
        <h1 className="text-neutral-500 underline mt-3">CONTACT INFORMATION</h1>

        <div className=" grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <h1 className=" font-medium ">Email id:</h1>
          <p className=" text-primary">{userData.email}</p>

          {/* user phone */}
          <p className=" font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 font-medium max-w-60  outline-gray-300 outline-offset-4"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
              type="text"
            />
          ) : (
            <p className=" text-primary">{userData.phone}</p>
          )}

          {/* user address */}
          <h1 className=" font-medium">Address:</h1>
          {isEdit ? (
            <p className=" max-w-60">
              <input
                className="bg-gray-100 font-medium w-full outline-gray-300 outline-offset-4 mb-2"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-100 font-medium w-full  outline-gray-300 outline-offset-4"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className=" text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* basic info */}
      <div className=" ">
        <h1 className="text-neutral-500 underline mt-3">BASIC INFORMATION</h1>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 ">
          {/* user gender */}
          <h1 className=" font-medium">Gender:</h1>
          {isEdit ? (
            <select
              className="bg-gray-100 font-medium max-w-60  outline-gray-300 outline-offset-4"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className=" text-gray-500">{userData.gender}</p>
          )}

          {/* Birth Date */}
          <h1 className=" font-medium">Birth Date:</h1>
          {isEdit ? (
            <input
              className="bg-gray-100 font-medium max-w-60  outline-gray-300 outline-offset-4"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
              type="date"
            />
          ) : (
            <p className=" text-gray-500">{userData.dob}</p>
          )}
        </div>
      </div>

      {/* buttons */}

      <div className=" mt-10">
        {isEdit ? (
          <button
            className=" border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Save Info
          </button>
        ) : (
          <button
            className=" border border-primary px-8 py-2 rounded-full hover:bg-primary hover:scale-105 hover:text-white duration-200"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
