import React from "react";

const TransactionHistory = () => {
  const transactions = [
    {
      orderId: "TXN001",
      date: "2025-01-14",
      time: "12:30 PM",
      items: 5,
      totalAmount: 7500,
      paymentMethod: "Visa Card",
      status: "Delivered",
    },
    {
      orderId: "TXN002",
      date: "2025-01-15",
      time: "10:00 AM",
      items: 3,
      totalAmount: 5000,
      paymentMethod: "Verve Card",
      status: "Cancelled",
    },
    {
      orderId: "TXN003",
      date: "2025-01-16",
      time: "02:15 PM",
      items: 2,
      totalAmount: 3200,
      paymentMethod: "Visa Card",
      status: "Pending",
    },
    {
      orderId: "TXN004",
      date: "2025-01-16",
      time: "04:45 PM",
      items: 4,
      totalAmount: 6000,
      paymentMethod: "Verve Card",
      status: "Delivered",
    },
  ];

  const dineInTransactions = [
    {
      id: "TXN123456",
      date: "2025-01-18",
      table: 5,
      items: [
        { name: "Chinese Spring Roll Starter", price: 35.0, quantity: 2 },
        { name: "Texas BBQ Steak & Burger", price: 25.0, quantity: 1 },
      ],
      total: 95.0,
      status: "Paid",
    },
    {
      id: "TXN123457",
      date: "2025-01-17",
      table: 3,
      items: [
        { name: "Vegetarian Pizza", price: 20.0, quantity: 1 },
        { name: "Caesar Salad", price: 15.0, quantity: 2 },
      ],
      total: 50.0,
      status: "Paid",
    },
    {
      id: "TXN123458",
      date: "2025-01-16",
      table: 8,
      items: [
        { name: "Grilled Chicken", price: 18.0, quantity: 2 },
        { name: "French Fries", price: 10.0, quantity: 1 },
      ],
      total: 46.0,
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-300 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            <span className="text-orange-600">Rusto</span>{" "}
            <span className="text-black">Restaurant</span>
          </h1>
          <p className="text-sm text-gray-500">
            Delivery Transaction and Payment History
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-orange-500 text-gray-700 text-sm uppercase">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Order ID</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Time</th>
                <th className="border border-gray-300 px-4 py-2">Items</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
                <th className="border border-gray-300 px-4 py-2">Payment Method</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className={`text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {transaction.orderId}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {transaction.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {transaction.time}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {transaction.items}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {transaction.totalAmount.toLocaleString()} NGN
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {transaction.paymentMethod}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 text-center font-semibold ${
                      transaction.status === "Delivered"
                        ? "text-green-600"
                        : transaction.status === "Cancelled"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {transaction.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 p-8 bg-white shadow-md rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Dine-In Transaction & Payment History
          </h2>
          <p className="text-gray-500">Track all dine-in orders and payments</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-orange-500">
                <th className="py-2 px-4 border text-left text-gray-600 font-semibold">
                  Transaction ID
                </th>
                <th className="py-2 px-4 border text-left text-gray-600 font-semibold">
                  Date
                </th>
                <th className="py-2 px-4 border text-left text-gray-600 font-semibold">
                  Table
                </th>
                <th className="py-2 px-4 border text-left text-gray-600 font-semibold">
                  Items
                </th>
                <th className="py-2 px-4 border text-right text-gray-600 font-semibold">
                  Total (\u00A3)
                </th>
                <th className="py-2 px-4 border text-left text-gray-600 font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {dineInTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border text-gray-800">
                    {transaction.id}
                  </td>
                  <td className="py-2 px-4 border text-gray-800">
                    {transaction.date}
                  </td>
                  <td className="py-2 px-4 border text-gray-800">
                    Table {transaction.table}
                  </td>
                  <td className="py-2 px-4 border text-gray-800">
                    <ul className="list-disc pl-4">
                      {transaction.items.map((item, index) => (
                        <li key={index}>
                          {item.name} x {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-2 px-4 border text-right text-gray-800">
                    {transaction.total.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border text-gray-800">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        transaction.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;

