// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AllUsers = () => {
//   const [users, setUsers] = useState([
//     { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "1234567890" },
//     { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", phone: "2345678901" },
//     { id: 3, firstName: "Alice", lastName: "Brown", email: "alice.brown@example.com", phone: "3456789012" },
//     { id: 4, firstName: "Bob", lastName: "Davis", email: "bob.davis@example.com", phone: "4567890123" },
//   ]);

//   const [staffs, setStaffs] = useState([
//     { id: 1, firstName: "James", lastName: "Joey", email: "james.joey@example.com", phone: "1234567890" },
//     { id: 2, firstName: "Janet", lastName: "Smithen", email: "janet.smithen@example.com", phone: "2345678901" },
//     { id: 3, firstName: "Ann", lastName: "Brownvile", email: "ann.brownvile@example.com", phone: "3456789012" },
//     { id: 4, firstName: "Bobby", lastName: "Javis", email: "bobby.javis@example.com", phone: "4567890123" },
//   ]);

//   const handleDelete = (id, type) => {
//     if (type === "user") {
//       setUsers(users.filter((user) => user.id !== id));
//     } else if (type === "staff") {
//       setStaffs(staffs.filter((staff) => staff.id !== id));
//     }

//     toast.error(`ID ${id} deleted from ${type === "user" ? "Users" : "Staffs"}`, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   return (
//     <div className="container mx-auto bg-orange-300 py-8">
//       <h2 className="text-2xl font-bold mb-6 text-center">View All Users</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-orange-300">
//           <thead>
//             <tr className="bg-orange-500">
//               <th className="px-4 py-2 text-left font-medium text-gray-700">ID</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">First Name</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">Last Name</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">Email</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">Phone</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className="border-t hover:bg-gray-100">
//                 <td className="px-4 py-2">{user.id}</td>
//                 <td className="px-4 py-2">{user.firstName}</td>
//                 <td className="px-4 py-2">{user.lastName}</td>
//                 <td className="px-4 py-2">{user.email}</td>
//                 <td className="px-4 py-2">{user.phone}</td>
//                 <td className="px-4 py-2">
//                   <button
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                     onClick={() => handleDelete(user.id, "user")}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <h2 className="text-2xl font-bold mt-10 mb-6 text-center">Approved Staff</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-orange-300">
//           <thead>
//             <tr className="bg-orange-500">
//               <th className="px-4 py-2 text-left font-medium text-gray-700">ID</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">First Name</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">Last Name</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">Email</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">Phone</th>
//               <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {staffs.map((staff) => (
//               <tr key={staff.id} className="border-t hover:bg-slate-100">
//                 <td className="px-4 py-2">{staff.id}</td>
//                 <td className="px-4 py-2">{staff.firstName}</td>
//                 <td className="px-4 py-2">{staff.lastName}</td>
//                 <td className="px-4 py-2">{staff.email}</td>
//                 <td className="px-4 py-2">{staff.phone}</td>
//                 <td className="px-4 py-2">
//                   <button
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                     onClick={() => handleDelete(staff.id, "staff")}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AllUsers;


import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "1234567890" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", phone: "2345678901" },
  ]);

  const [staffs, setStaffs] = useState([
    { id: 1, firstName: "James", lastName: "Joey", email: "james.joey@example.com", phone: "1234567890" },
    { id: 2, firstName: "Janet", lastName: "Smithen", email: "janet.smithen@example.com", phone: "2345678901" },
  ]);

  const [pendingStaffs, setPendingStaffs] = useState([
    { id: 1, firstName: "Mark", lastName: "Johnson", email: "mark.johnson@example.com", phone: "1234567890", status: "" },
    { id: 2, firstName: "Emma", lastName: "Stone", email: "emma.stone@example.com", phone: "2345678901", status: "" },
  ]);

  const handleDelete = (id, type) => {
    if (type === "user") {
      setUsers(users.filter((user) => user.id !== id));
    } else if (type === "staff") {
      setStaffs(staffs.filter((staff) => staff.id !== id));
    }
    toast.error(`ID ${id} deleted`, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  const handleApprove = (id) => {
    const staffToApprove = pendingStaffs.find((staff) => staff.id === id);
    const updatedStaff = { ...staffToApprove, status: "Approved" };

    setStaffs([...staffs, updatedStaff]);
    setPendingStaffs(
      pendingStaffs.map((staff) =>
        staff.id === id ? { ...staff, status: "Approved" } : staff
      )
    );

    toast.success(`${staffToApprove.firstName} approved as staff`, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  const handleDeny = (id) => {
    setPendingStaffs(
      pendingStaffs.map((staff) =>
        staff.id === id ? { ...staff, status: "Denied" } : staff
      )
    );

    toast.error(`Pending staff ID ${id} denied`, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <div className="container mx-auto bg-orange-300 py-8">
      {/* Users Table */}
      <h2 className="text-2xl font-bold mb-6 text-center">View All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-orange-300">
          <thead>
            <tr className="bg-orange-500">
              <th className="px-4 py-2 text-left font-medium text-gray-700">ID</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">First Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Last Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Phone</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.firstName}</td>
                <td className="px-4 py-2">{user.lastName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(user.id, "user")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Approved Staff Table */}
      <h2 className="text-2xl font-bold mt-10 mb-6 text-center">View All Approved Staff</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-orange-300">
          <thead>
            <tr className="bg-orange-500">
              <th className="px-4 py-2 text-left font-medium text-gray-700">ID</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">First Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Last Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Phone</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((staff, index) => (
              <tr key={staff.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{staff.firstName}</td>
                <td className="px-4 py-2">{staff.lastName}</td>
                <td className="px-4 py-2">{staff.email}</td>
                <td className="px-4 py-2">{staff.phone}</td>
                <td className="px-4 py-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(staff.id, "staff")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pending Staff Table */}
      <h2 className="text-2xl font-bold mt-10 mb-6 text-center">View All Pending Staff</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-orange-300">
          <thead>
            <tr className="bg-orange-500">
              <th className="px-4 py-2 text-left font-medium text-gray-700">ID</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">First Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Last Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Phone</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Status</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingStaffs.map((staff, index) => (
              <tr key={staff.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{staff.firstName}</td>
                <td className="px-4 py-2">{staff.lastName}</td>
                <td className="px-4 py-2">{staff.email}</td>
                <td className="px-4 py-2">{staff.phone}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      staff.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : staff.status === "Denied"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-300 text-orange-700"
                    }`}
                  >
                    {staff.status || "Pending"}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => handleApprove(staff.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDeny(staff.id)}
                  >
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AllUsers;
