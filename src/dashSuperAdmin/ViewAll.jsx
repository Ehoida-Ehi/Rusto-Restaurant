import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewAll = () => {
  const [appadmins, setAppadmins] = useState([
    { firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "1234567890" },
    { firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", phone: "2345678901" },
    { firstName: "Alice", lastName: "Brown", email: "alice.brown@example.com", phone: "3456789012" },
    { firstName: "Bob", lastName: "Davis", email: "bob.davis@example.com", phone: "4567890123" },
  ]);

  const [pendingadmins, setPendingadmins] = useState([
    { firstName: "James", lastName: "Joey", email: "james.joey@example.com", phone: "1234567890", status: null },
    { firstName: "Janet", lastName: "Smithen", email: "janet.smithen@example.com", phone: "2345678901", status: null },
    { firstName: "Ann", lastName: "Brownvile", email: "ann.brownvile@example.com", phone: "3456789012", status: null },
    { firstName: "Bobby", lastName: "Javis", email: "bobby.javis@example.com", phone: "4567890123", status: null },
  ]);

  const handleDelete = (index, type) => {
    if (type === "appadmin") {
      setAppadmins(appadmins.filter((_, i) => i !== index));
      toast.error("Admin deleted from Approved Admins.", { theme: "colored" });
    } else if (type === "pendingadmin") {
      setPendingadmins(pendingadmins.filter((_, i) => i !== index));
      toast.error("Admin deleted from Pending Admins.", { theme: "colored" });
    }
  };

  const handleApprove = (index) => {
    const updatedAdmins = [...pendingadmins];
    updatedAdmins[index].status = "Approved";
    setPendingadmins(updatedAdmins);
    setAppadmins([...appadmins, updatedAdmins[index]]);
    toast.success("Admin approved successfully!", { theme: "colored" });
  };

  const handleDeny = (index) => {
    const updatedAdmins = [...pendingadmins];
    updatedAdmins[index].status = "Denied";
    setPendingadmins(updatedAdmins);
    toast.error("Admin denied.", { theme: "colored" });
  };

  return (
    <div className="container mx-auto py-8">
      {/* Approved Admins Table */}
      <h2 className="text-2xl font-bold mb-6 text-center">View All Approved Admins</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-black">
              <th className="px-4 py-2 text-left font-medium text-gray-200">Number</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">First Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Last Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Email</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Phone</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appadmins.map((admin, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{admin.firstName}</td>
                <td className="px-4 py-2">{admin.lastName}</td>
                <td className="px-4 py-2">{admin.email}</td>
                <td className="px-4 py-2">{admin.phone}</td>
                <td className="px-4 py-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(index, "appadmin")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pending Admins Table */}
      <h2 className="text-2xl font-bold mt-10 mb-6 text-center">View All Pending Admins</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-black">
              <th className="px-4 py-2 text-left font-medium text-gray-200">Number</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">First Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Last Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Email</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Phone</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Status</th>
              <th className="px-4 py-2 text-left font-medium text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingadmins.map((admin, index) => (
              <tr key={index} className="border-t ">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{admin.firstName}</td>
                <td className="px-4 py-2">{admin.lastName}</td>
                <td className="px-4 py-2">{admin.email}</td>
                <td className="px-4 py-2">{admin.phone}</td>
                <td
                  className={`px-3 py-1 rounded-full ${
                    admin.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : admin.status === "Denied"
                      ? "bg-red-100 text-red-700"
                      : "bg-orange-300 text-orange-700"
                  }`}
                >
                  {admin.status || "Pending"}
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => handleApprove(index)}
                    disabled={admin.status === "Approved"}
                  >
                    Approve
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDeny(index)}
                    disabled={admin.status === "Denied"}
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

export default ViewAll;


