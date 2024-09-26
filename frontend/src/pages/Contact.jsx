import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 text-gray-500">
        <h1>
          CONTACT <span className=" text-gray-700 font-medium">US</span>
        </h1>
      </div>

      {/* Contact section */}
      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-base">
        {/* image */}
        <img
          className=" w-fll max-w-[360px]"
          src={assets.contact_image}
          alt="Contact_Image"
        />

        {/* text */}
        <div className="flex flex-col justify-center items-start gap-6 text-base text-gray-500">
          <p className=" text-lg text-gray-600 font-semibold">OUR OFFICE</p>
          <p>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p>
            Tel: (415) 555‑0132 <br /> Email: example@gmail.com
          </p>
          <p className=" text-lg text-gray-600 font-semibold">
            CAREERS AT PRESCRIPTO
          </p>
          <p className=" -mt-5">Learn more about our teams and job openings</p>
          <button className=" border border-primary border-opacity-60 px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500 ">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
