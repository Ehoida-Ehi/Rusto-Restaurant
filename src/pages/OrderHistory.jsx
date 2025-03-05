import React, { useState, useEffect } from 'react';
import { MdEdit } from "react-icons/md";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    const contactDetails = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        address: "123 Main Street, City, Country",
    };

    useEffect(() => {
        const fetchOrders = async () => {
            const mockOrders = [
                {
                    id: 1,
                    date: '2025-01-01',
                    items: [
                        { name: 'Cheese Cake', quantity: 2 },
                        { name: 'Stake & Burger', quantity: 1 },
                    ],
                    total: 80000.00,
                    status: 'Delivered',
                },
                {
                    id: 2,
                    date: '2025-02-10',
                    items: [
                        { name: 'Burger', quantity: 1 },
                        { name: 'Spring Roll', quantity: 1 },
                    ],
                    total: 55000.00,
                    status: 'Cancelled',
                },
                {
                    id: 3,
                    date: '2025-01-12',
                    items: [
                        { name: 'Steak', quantity: 1 },
                        { name: 'Meal Package', quantity: 1 },
                    ],
                    total: 130000.00,
                    status: 'Delivered',
                },
            ];
            setOrders(mockOrders);
        };

        fetchOrders();
    }, []);

    return (
        <div className="p-6 mt-10 bg-slate-950 min-h-screen">
            {/* Contact Details Card */}
            <div className='w-96 h-56 mb-6'>
                <div className="mt-8">
                    <h3 className="text-lg mt-4 text-white font-medium mb-4">Contact Address</h3>
                    <div className="relative border p-4 rounded shadow-sm">
                        {/* Edit Icon */}
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            <MdEdit className="w-5 h-5" />
                        </button>
                        <p className="text-white">
                            <span className="font-semibold">First Name:</span> {contactDetails.firstName}
                        </p>
                        <p className="text-white mt-2">
                            <span className="font-semibold">Last Name:</span> {contactDetails.lastName}
                        </p>
                        <p className="text-white mt-2">
                            <span className="font-semibold">Email:</span> {contactDetails.email}
                        </p>
                        <p className="text-white mt-2">
                            <span className="font-semibold">Phone:</span> {contactDetails.phone}
                        </p>
                        <p className="text-white mt-2">
                            <span className="font-semibold">Address:</span> {contactDetails.address}
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="text-3xl  text-white font-bold mb-6">Order History</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full w-full border-collapse bg-black shadow-md">
                    <thead className="bg-black text-white hidden md:table-header-group">
                        <tr>
                            <th className="border px-4 py-2">Order ID</th>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Items</th>
                            <th className="border px-4 py-2">Total (&#8358;)</th>
                            <th className="border px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className="block md:table-row text-white border-b md:border-none"
                            >
                                {/* Mobile view: Use block elements */}
                                <td className="border px-4 py-2 block md:table-cell">
                                    <span className="md:hidden font-semibold">Order ID: </span>
                                    {order.id}
                                </td>
                                <td className="border px-4 py-2 block md:table-cell">
                                    <span className="md:hidden font-semibold">Date: </span>
                                    {order.date}
                                </td>
                                <td className="border px-4 py-2 block md:table-cell text-left">
                                    <span className="md:hidden font-semibold">Items: </span>
                                    {order.items.map((item, index) => (
                                        <div key={index} className="text-sm">
                                            {item.name} (x{item.quantity})
                                        </div>
                                    ))}
                                </td>
                                <td className="border px-4 py-2 block md:table-cell">
                                    <span className="md:hidden font-semibold">Total (NGN): </span>
                                    {order.total.toFixed(2)}
                                </td>
                                <td
                                    className={`border px-4 py-2 block md:table-cell ${order.status === "Delivered" ? "text-green-500" : "text-red-500"
                                        }`}
                                >
                                    <span className="md:hidden font-semibold">Status: </span>
                                    {order.status}
                                </td>
                            </tr>
                        ))}
                        {orders.length === 0 && (
                            <tr className="block md:table-row">
                                <td colSpan="5" className="text-center py-4 block md:table-cell">
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className='h-[100px] bg-slate-950'></div>
        </div>
    );
};

export default OrderHistory;