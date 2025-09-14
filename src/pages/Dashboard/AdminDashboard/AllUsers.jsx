import React from "react";
import DashboardCover from "../../SharedPages/dashboardCover/DashboardCover";
import useUsers from "../../../Hooks/useUsers";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiousSecure from "../../../Hooks/useAxiousSecure";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [users, refetch] = useUsers();
  const axiousSecure = useAxiousSecure();

  // make adin
  const handleAdmin=(user)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, make admin!"
}).then((result) => {
  if (result.isConfirmed) {
    //console.log('admin' , user);
    axiousSecure.patch(`/users/${user._id}`)
    .then(res=>{
      console.log('update admin', res.data);
      refetch()
      if(res.data.modifiedCount > 0){
 Swal.fire({
      title: "Admin Now!",
      text: `${user.name} is admin in our web site`,
      icon: "success"
    });
      }
    })
   
  }
});
  }



  const handleDelete = (user)=>{
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
     console.log('dlete user' , user);
     axiousSecure.delete(`/users/${user._id}`)
     .then(res=>{
       if(res.data.deletedCount > 0){
            refetch();
            toast.success(`${user.name} is delete from oure users list`)
        }
     })

      // if(res.data.deletedcount)
     
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
        heading={"show all user of our website"}
        subheading={"all users lists"}
      ></DashboardCover>
      <h1 className="text-xl font-bold uppercase">total Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-green-200 uppercase">
            <tr>
              <th>
            #$
              </th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                {
                  user.role == 'admin'? 'admin':  <button onClick={()=>handleAdmin(user)} className="btn btn-outline border-0">user</button>
                }
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-xs text-red-500 text-xl"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
