//import React, { useEffect, useState } from "react";
import { FaDollarSign, FaLocationArrow } from "react-icons/fa6";
import useDoctor from "../../../Hooks/useDoctor";
import { IoLocationSharp } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

const Doctor = () => {
  const [ doctors ] = useDoctor()
  // const [doctors, setDoctors] = useState([]);
  // useEffect(() => {
  //   fetch("doctor.json")
  //     .then((res) => res.json())
  //     .then((data) => setDoctors(data));
  // }, []);

  console.log(doctors);

  return (
    <div className="py-5 px-32">
      <h1 className="text-3xl font-bold text-center mb-3">
        Our Expert Doctors({doctors.length})
      </h1>
      <p className="text-center">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="grid md:grid-cols-4 gap-2">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="card bg-base-100  shadow-sm">
            <figure className="px-5 pt-5">
              <img
                src={doctor.doctor_image}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{doctor.doctor_name}</h2>
              <p>{doctor.service_name}</p>
              <div>
               <h1 className="flex gap-2 items-center" > <span><IoLocationSharp></IoLocationSharp></span> {doctor.location}</h1>
               <h1 className="flex gap-2 items-center" > <span><BiCategory></BiCategory> </span> {doctor.category}</h1>
               <h1 className="flex gap-2 items-center" > <span><FaDollarSign></FaDollarSign></span> {doctor.price}$</h1>
              </div>
              <div className="card-actions ">
               <Link to={`/docDetails/${doctor._id}`}>
                <button className="btn btn-secondary  w-full btn-outline ">View full Profile</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
