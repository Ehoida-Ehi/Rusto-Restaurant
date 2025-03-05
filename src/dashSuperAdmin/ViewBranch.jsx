import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const ViewBranch = () => {
    const [branches] = useState([
        {
            id: 1,
            name: "Rusto Restaurant",
            location: "Abuja",
            address: "123 Main Street, Maitama",
            description: "Our Abuja branch is the heart of the city, serving customers with top-notch services.",
            banner: "https://cdn.pixabay.com/photo/2024/01/20/12/31/ai-generated-8520995_1280.png",
            contact: "Ola Yemi (Admin)",
            staffCount: 15,
            operationalHours: "9:00 AM - 11:00 PM",
        },
        {
            id: 2,
            name: "Rusto Restaurant",
            location: "Lagos",
            address: "123 Building, Awolowo Road, Ikoyi",
            description: "Experience luxury and comfort at our Uptown branch in Lagos.",
            banner: "https://cdn.pixabay.com/photo/2016/04/02/17/58/service-1303313_1280.jpg",
            contact: "Obinna Dike (Admin)",
            staffCount: 20,
            operationalHours: "8:00 AM - 11:00 PM",
        },
        {
            id: 3,
            name: "Rusto Restaurant",
            location: "Benin",
            address: "Hallmark Plaza, Airport Road, GRA",
            description: "Experience luxury and comfort at our branch in Benin.",
            banner: "https://cdn.pixabay.com/photo/2024/02/27/16/43/ai-generated-8600463_1280.jpg",
            contact: "Osaro Akere (Admin)",
            staffCount: 50,
            operationalHours: "8:00 AM - 11:00 PM",
        },
        {
            id: 4,
            name: "Rusto Restaurant",
            location: "Warri",
            address: "Montgomery Hotel, Effurun Road, Uvwie",
            description: "Experience luxury and comfort at our branch in Warri.",
            banner: "https://cdn.pixabay.com/photo/2024/08/22/15/59/ai-generated-8989661_1280.jpg",
            contact: "Oke Voke (Admin)",
            staffCount: 50,
            operationalHours: "8:00 AM - 11:00 PM",
        },
        // Add more branches as needed
    ]);
    const [selectedBranch, setSelectedBranch] = useState(null);

    const closeModal = () => setSelectedBranch(null);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">View Branches Details</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-black">
                            <th className="px-4 py-2 text-left text-gray-200 font-medium">Branch ID</th>
                            <th className="px-4 py-2 text-left text-gray-200 font-medium">Branch Name</th>
                            <th className="px-4 py-2 text-left text-gray-200 font-medium">Location</th>
                            <th className="px-4 py-2 text-left text-gray-200 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {branches.map((branch) => (
                            <tr key={branch.id} className="border-t hover:bg-gray-100">
                                <td className="px-4 py-2">{branch.id}</td>
                                <td className="px-4 py-2">{branch.name}</td>
                                <td className="px-4 py-2">{branch.location}</td>
                                <td className="px-4 py-2">
                                    <button
                                        className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
                                        onClick={() => setSelectedBranch(branch)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedBranch && (
                <Dialog
                    open={!!selectedBranch}
                    onClose={closeModal}
                    className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <div className="bg-white rounded-lg shadow-lg w-96 p-4">
                        <img
                            src={selectedBranch.banner}
                            alt={`${selectedBranch.name} Banner`}
                            className="w-96 h-40 rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-4">{selectedBranch.name} - Details</h3>
                        <ul className="space-y-2">
                            <li>
                                <strong>Branch ID:</strong> {selectedBranch.id}
                            </li>
                            <li>
                                <strong>Address:</strong> {selectedBranch.address}
                            </li>
                            <li>
                                <strong>Location:</strong> {selectedBranch.location}
                            </li>
                            <li>
                                <strong>Description:</strong> {selectedBranch.description}
                            </li>
                            <li>
                                <strong>Contact:</strong> {selectedBranch.contact}
                            </li>
                            <li>
                                <strong>Number of Staffs:</strong> {selectedBranch.staffCount}
                            </li>
                            <li>
                                <strong>Operational Hours:</strong> {selectedBranch.operationalHours}
                            </li>
                        </ul>
                        <div className="mt-6 text-right">
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

export default ViewBranch;