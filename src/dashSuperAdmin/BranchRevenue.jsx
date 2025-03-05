import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BranchRevenue = () => {
  const [branches, setBranches] = useState([
    { id: 1, name: "123 Building, Awolowo Road, Ikoyi", location: "Lagos", revenue: 9800000 },
    { id: 2, name: "Main Street Building Maitama", location: "Abuja", revenue: 7500000 },
    { id: 3, name: "Hallmark Plaza, Airport Road, GRA", location: "Benin", revenue: 1362000 },
    { id: 4, name: "Montgomery Hotel, Effurun Road, Uvwie", location: "Warri", revenue: 5400000 },
  ]);

  const handleDeleteBranch = (id) => {
    setBranches(branches.filter((branch) => branch.id !== id));
    toast.error("Branch deleted successfully.", { theme: "colored" });
  };

  const handleAddBranch = () => {
    const newBranch = {
      id: branches.length + 1,
      name: "New Branch",
      location: "Unspecified",
      revenue: 0,
    };
    setBranches([...branches, newBranch]);
    toast.success("New branch added!", { theme: "colored" });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Branches & Revenue</h2>

      <div className="mb-6 text-right">
        <button
          className="px-4 py-2 mr-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          onClick={handleAddBranch}
        >
          Add New Branch
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-black">
              <th className="px-4 py-2 text-left text-gray-200 font-medium">Branch ID</th>
              <th className="px-4 py-2 text-left text-gray-200 font-medium">Branch Name</th>
              <th className="px-4 py-2 text-left text-gray-200 font-medium">Location</th>
              <th className="px-4 py-2 text-left text-gray-200 font-medium">Revenue</th>
              <th className="px-4 py-2 text-left text-gray-200 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch, index) => (
              <tr key={branch.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{branch.id}</td>
                <td className="px-4 py-2">{branch.name}</td>
                <td className="px-4 py-2">{branch.location}</td>
                <td className="px-4 py-2">&#8358;{branch.revenue.toLocaleString()}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDeleteBranch(branch.id)}
                  >
                    Delete
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

export default BranchRevenue;