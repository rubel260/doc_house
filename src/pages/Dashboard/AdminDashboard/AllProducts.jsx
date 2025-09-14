import React from "react";
import DashboardCover from "../../SharedPages/dashboardCover/DashboardCover";
import useMedicine from "../../../Hooks/useMedicine";
import Swal from "sweetalert2";
import { FaTrash, FaUtensils } from "react-icons/fa";
import useAxiousSecure from "../../../Hooks/useAxiousSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [medicine, refetch] = useMedicine();
  const axiousSecure = useAxiousSecure();
  const handleDelete=(item)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    console.log('product dele' , item);
    axiousSecure.delete(`/medicine/${item._id}`)
    .then(res=>{
        console.log('product dele' , res.data);
        if(res.data.deletedCount > 0){
            refetch();
            toast.success('this product is delete succsessfull')
        }
    })
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
  }

  return (
    <div>
      <DashboardCover
        heading={"here shows all products"}
        subheading={"All Products"}
      ></DashboardCover>
      <h1>total Products: {medicine.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>image</th>
              <th>name</th>
              <th>category Color</th>
              <th>price</th>
              <th>stock</th>
              <th>actios</th>
              <th>actios</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {medicine.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <th>
                  <Link to={`/dashboard/updateproduct/${item._id}`}><button
                   
                    className="btn btn-ghost btn-xs text-red-500 text-xl"
                  >
                    <FaUtensils></FaUtensils>
                  </button></Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-xs text-red-500 text-xl"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
