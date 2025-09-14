import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiousSecure from "../../../Hooks/useAxiousSecure";
import toast from "react-hot-toast";
import useCart from "../../../Hooks/useCart";

const ServiceCard = ({ item }) => {
    const {name , category , description , price , stock , manufacturer , image , _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const axiousSecure = useAxiousSecure();
    const [,refetch] = useCart();

    const handleCart = (id)=>{
      if(user && user?.email){
     //console.log('add cart' , id);
     const cartInfo={
      coustomer_name: user?.displayName,
      email: user?.email,
      product_name: name,
      product_id: _id,
      category,
      price,
      image,


     }

     //console.log('cart info' , cartInfo);
     axiousSecure.post('/cart',cartInfo)
     .then(res=>{
      if(res.data.insertedId){
        toast.success(`${name} is added to Your cart!`)
        refetch();
      }
     })
     .catch(err=>{
      console.log(err);
     })
     
      }
      else{
      Swal.fire({
  title: "Are you sure?",
  text: "if you add to cart before login!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Login!"
}).then((result) => {
  if (result.isConfirmed) {

    navigate('/login' , {state: {from: location}})

    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
      }

     
    }
  return (
    <div>
      <div className="card bg-base-100 p-3 shadow-sm">
        <figure>
          <img 
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
           {description}
          </p>
          <p className="text-gray-500 uppercase">price: {price}$</p>
          <div className="card-actions ">
            <button onClick={()=>handleCart(_id)} className="btn btn-neutral w-full">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
