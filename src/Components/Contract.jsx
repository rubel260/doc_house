import { FaPhone } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Contract = () => {
  return (
    <div className=" flex justify-center gap-10 py-5 px-32">
        <div className=" flex items-center gap-3 bg-blue-300 py-8 px-12 rounded-lg ">

            <h1 className="text-2xl">
                <IoMdTimer></IoMdTimer>
            </h1>
            <div>
                <p className="font-bold">Opening Time</p>
                <p >Open 9.00 am to 5.00pm Everyday</p>
            </div>

        </div>
        <div className=" flex items-center gap-3 bg-orange-300 py-8 px-12 rounded-lg">

            <h1 className="text-2xl">
                <IoLocation></IoLocation>
            </h1>
            <div>
                <p className="font-bold">Our Location</p>
                <p >Dhaka , BanglaDesh</p>
            </div>

        </div>
       <div className=" flex items-center gap-3 bg-blue-300 py-8 px-12 rounded-lg ">

            <h1 className="text-2xl">
                <FaPhone></FaPhone>
            </h1>
            <div>
                <p className="font-bold">Contract us</p>
                <p >+8801767474729</p>
            </div>

        </div>
    
    </div>
  );
};

export default Contract;
