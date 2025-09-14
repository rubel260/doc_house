// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
//import useReview from '../../../Hooks/useReview';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import useReview from "../../../Hooks/useReview";

const Review = () => {
  const [reviews] = useReview();

  // const [review, setReview] = useState([]);
  // useEffect(() => {
  //   fetch("review.json")
  //     .then((res) => res.json())
  //     .then((data) => setReview(data));
  // }, []);

  return (
    <div className="py-5 px-32 bg-gray-200">
      <h1 className="text-3xl font-bold text-center">
        Our patients says on our services! {reviews.length}
      </h1>
      <p className="text-center">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((item) => (
            <SwiperSlide>
              <div className="max-w-lg mx-auto mt-5  rounded-xl shadow-md p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  {/* Profile Image */}
                <div className="avatar avatar-placeholder">
  <div className="bg-neutral text-neutral-content w-15 rounded-full">
    <span className="text-3xl">{item.patient_name?.[0]}</span>
  </div>
</div>

                  {/* Name & Role */}
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{item.patient_name}</h3>
                    <p className="text-gray-500 text-sm">Product Designer</p>
                  </div>

                  {/* Quote Icon */}
                  <div className="ml-auto text-orange-400 text-3xl">
                    <FaQuoteRight></FaQuoteRight>       
                </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed">
                 {item.review_text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
