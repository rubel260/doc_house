import React from 'react';
import DashboardCover from '../../SharedPages/dashboardCover/DashboardCover';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const AllPayment = () => {

    const axiousSecure = useAxiousSecure();
    const {data: payments=[] , refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async()=>{
            const result = await axiousSecure.get('/payments');
            return result.data
        }
    })

      const handlePendingChange = (id)=>{
        Swal.fire({
      title: "Are you sure to deliver?",
      text: "Do you want deliver the product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deliver it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('delivered' , id);
        axiousSecure.patch(`/payments/${id}`)
        .then(res=>{
            console.log('deliver confirm ' , res.data);
            toast.success('this order is deliver successful')
            refetch();
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
            <DashboardCover heading={'show all transactions'} subheading={'All Payment history'}></DashboardCover>
            <p>total transaction: {payments.length}</p>
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
            payments.map((item , index)=>    <tr key={item._id}>
              <th>{index+1}</th>
              <td>{item.email}</td>
              <td>{item.price}</td>
              <td>{item.transactionId}</td>
              <td>{item.date}</td>
              <th>
                {
                  item.status === 'delivered' ? <p className="text-green-500">delivered</p> : <button onClick={()=>handlePendingChange(item._id)}>{item.status}</button> 
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

export default AllPayment;