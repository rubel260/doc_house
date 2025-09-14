import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar, FaRocket } from "react-icons/fa";
import DashboardCover from '../../SharedPages/dashboardCover/DashboardCover';

const Review = () => {
 const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const reviewData = {
      ...data,
      rating,
    };
    console.log("Review Submitted:", reviewData);
    reset();
    setRating(null);
  };
    return (
        <div>
            <DashboardCover heading={'Compliment of Product'} subheading={'Post a Review'}></DashboardCover>
            <div className="flex justify-center items-center min-h-1/2 bg-gray-100">
      <div className="bg-gray-50 p-10 rounded-xl shadow-md w-full max-w-lg">
        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-4">RATE US!</h2>

        {/* Stars */}
        <div className="flex justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            return (
              <FaStar
                key={i}
                className={`cursor-pointer text-3xl transition-colors ${
                  ratingValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            );
          })}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Which recipe you liked most?
            </label>
            <input
              type="text"
              placeholder="Recipe you liked most"
              {...register("recipe", { required: "Recipe is required" })}
              className="input input-bordered w-full"
            />
            {errors.recipe && (
              <p className="text-red-500 text-sm mt-1">{errors.recipe.message}</p>
            )}
          </div>

          {/* Suggestion Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Do you have any suggestion for us?
            </label>
            <input
              type="text"
              placeholder="Suggestion"
              {...register("suggestion")}
              className="input input-bordered w-full"
            />
          </div>

          {/* Review Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Kindly express your care in a short way.
            </label>
            <textarea
              placeholder="Review in detail"
              {...register("review", { required: "Review is required" })}
              className="textarea textarea-bordered w-full"
              rows="3"
            ></textarea>
            {errors.review && (
              <p className="text-red-500 text-sm mt-1">{errors.review.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn bg-yellow-700 hover:bg-yellow-800 text-white w-full gap-2"
          >
            Send Review <FaRocket />
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Review;