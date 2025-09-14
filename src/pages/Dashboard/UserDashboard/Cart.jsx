import React from "react";
import useCart from "../../../Hooks/useCart";
import DashboardCover from "../../SharedPages/dashboardCover/DashboardCover";
import { MdPayment } from "react-icons/md";
import { FaTrash, FaUtensils } from "react-icons/fa";
import useAxiousSecure from "../../../Hooks/useAxiousSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const [cart , refetch] = useCart();
  const totalPrice = cart.reduce((sum,item)=> sum + item.price , 0)
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
   axiousSecure.delete(`/cart/${item._id}`)
    .then(res=>{
        console.log('dlete' , res.data);
        if(res.data.deletedCount > 0){
            refetch();
            toast.success(`${item.product_name} is delete from your cart`)
        }
    })
  }
});
    
   
  }


  return (
    <div>
      <Helmet>
                          <title>DocHouse || Cart</title>
        </Helmet>
      <DashboardCover
        heading={"wellcome to You dashboad"}
        subheading={"Cart sections"}
      ></DashboardCover>
      <div className="flex justify-between p-3 text-xl uppercase font-bold">
        <p>Total Product: {cart.length}</p>
        <h1>total Price: {totalPrice}</h1>
      {
        cart.length ? <Link to={`/dashboard/payment`}>
        <button className="btn bg-green-400 text-xl uppercase"> <MdPayment /> Payment</button>
      </Link> :
      <button disabled className="btn bg-green-400 text-xl uppercase"> <MdPayment /> Payment</button>
      
      }
       
      </div>
     

      {/* table  */}
      <div className="overflow-x-auto p-3">
        <table className="table">
          {/* head */}
          <thead className="bg-green-200 uppercase">
            <tr>
              <th>
                #$
              </th>
              <th>Image</th>
              <th>productName</th>
              <th>Price</th>
              <th>Coustomer</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            cart.map((item  , index)=>  <tr key={item._id}>
              <th>
                {index+1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="img issue"
                      />
                    </div>
                  </div>
                 
                </div>
              </td>
              <td>
               {item.product_name}
              </td>
              <td>{item.price}</td>
              <td>{item.coustomer_name}</td>
             
              <th>
                <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs text-red-500 text-xl"><FaTrash></FaTrash></button>
              </th>
            </tr>)
           }
     
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Cart;
