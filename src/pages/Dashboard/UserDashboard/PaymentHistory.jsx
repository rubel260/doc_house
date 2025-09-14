import React from "react";
import { Helmet } from "react-helmet-async";
import DashboardCover from "../../SharedPages/dashboardCover/DashboardCover";
import usePaymentHis from "../../../Hooks/usePaymentHis";
import Swal from "sweetalert2";

const PaymentHistory = () => {
  const [payment] = usePaymentHis();
//   const handlePendingChange = (id)=>{
//     Swal.fire({
//   title: "Are you sure to deliver?",
//   text: "Do you want deliver the product!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, deliver it!"
// }).then((result) => {
//   if (result.isConfirmed) {
//     console.log('delivered' , id);
//     // Swal.fire({
//     //   title: "Deleted!",
//     //   text: "Your file has been deleted.",
//     //   icon: "success"
//     // });
//   }
// });
    
//   }

  return (
    <div>
      <Helmet>
        <title>DocHouse || payment histry</title>
      </Helmet>
      <DashboardCover
        heading={"show your transactions"}
        subheading={"All Transactions"}
      ></DashboardCover>
      <h1>Total payment: {payment.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-green-300 text-white text-xl uppercase">
            <tr>
              <th>#</th>
              <th>email</th>
              <th>Price</th>
              <th>transactionId</th>
              <th>date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
         {
            payment.map((item , index)=>    <tr key={item._id}>
              <th>{index+1}</th>
              <td>{item.email}</td>
              <td>{item.price}</td>
              <td>{item.transactionId}</td>
              <td>{item.date}</td>
              <th>
                {
                  item.status === 'delivered' ? <p className="text-green-500">delivered</p> : <button >{item.status}</button> 
                }
              </th>
            </tr>
          )
         }
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
