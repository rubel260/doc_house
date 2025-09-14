import React from 'react';
import DashboardCover from '../../SharedPages/dashboardCover/DashboardCover';
import { useForm } from 'react-hook-form';
import useAxiousPublic from '../../../Hooks/useAxiousPublic';
import { useLoaderData } from 'react-router-dom';

const image_hosting_key= import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const  singleItem = useLoaderData();
   // console.log('loadeer data',singleItem);
    const axiousPublic = useAxiousPublic();
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

       const onSubmit = async(data) => {
    const  imageFile = {image: data.image[0]}
   const res= await axiousPublic.post(image_hosting_api ,imageFile,{
       headers: {
        "content-type": "multipart/form-data",
      },
    } )
    console.log('file' , data);
}
    
    return (
        <div>
            <DashboardCover heading={'change your product details if wrong'} subheading={'Update product'}></DashboardCover>

             <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* product name Name */}
          <div>
            <label className="block mb-1 font-medium">medicine name*</label>
            <input
              type="text"
              defaultValue={singleItem.name}
              placeholder="medicine name"
              {...register("name", {
                required: "medicine name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Category*</label>
              <select
                {...register("category", { required: "Category is required" })}
                className="select select-bordered w-full"
              >
                <option disabled  value="">Category</option>
                <option value="PainRelief">PainRelief</option>
                <option value="Antibiotic">Antibiotic</option>
                <option value="Allergy">Allergy</option>
                <option value="Gastric">Gastric</option>
                <option value="Diabetes">Diabetes</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">Price*</label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: "Price is required" })}
                className="input input-bordered w-full"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
          </div>

          {/* stock and manufacture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">stock*</label>
              <input
                type="number"
                placeholder="stock"
                {...register("stock", { required: "stock is required" })}
                className="input input-bordered w-full"
              />
              {errors.stock && (
                <p className="text-red-500 text-sm">{errors.stock.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">manufacturer*</label>
              <input
                type="text"
                placeholder="manufacturer name"
                {...register("manufacturer", {
                  required: "manufacturer name is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.manufacturer && (
                <p className="text-red-500 text-sm">
                  {errors.manufacturer.message}
                </p>
              )}
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="block mb-1 font-medium">
              medicine description*
            </label>
            <textarea
              placeholder=" description"
              {...register("description", { required: "Details are required" })}
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn bg-green-700 hover:bg-green-800 text-white"
            >
              Add Item 🍽
            </button>
          </div>
        </form>
      </div>
            
        </div>
    );
};

export default UpdateProduct;