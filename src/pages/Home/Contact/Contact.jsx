import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center items-center py-10 bg-base-200">
      <div className="bg-[#063c36] text-white rounded-lg p-10 w-[90%] md:w-3/4 lg:w-2/3 flex flex-col md:flex-row gap-10 shadow-xl">
        
        {/* Left Side */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Contact With Us</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xl">📞</span>
            <p className="text-gray-300">+88 01750 14 14 14</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl">📍</span>
            <p className="text-gray-300">Dhanmondi, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex-1">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full bg-[#094d44] text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-[#094d44] text-white"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="input input-bordered w-full bg-[#094d44] text-white"
            />
            <input
              type="text"
              placeholder="Doctor Name"
              className="input input-bordered w-full bg-[#094d44] text-white"
            />
            <input
              type="date"
              className="input input-bordered w-full bg-[#094d44] text-white"
            />
            <select className="select select-bordered w-full bg-[#094d44] text-white">
              <option disabled selected>
                Time
              </option>
              <option>10:00 AM</option>
              <option>02:00 PM</option>
              <option>06:00 PM</option>
            </select>
            <div className="md:col-span-2">
              <button className="btn w-full bg-[#f9a47b] text-white border-0 hover:bg-[#f78b5c]">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Contact;