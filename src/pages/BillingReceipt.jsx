import React from "react";

const BillingReceipt = () => {
  const receiptData = {
    restaurantName: "Rusto",
    restaurantType: "Restaurant",
    restaurantEmail: "info@rusto.com",
    restaurantPhone: "+234 812 345 6789",
    paymentMethod: "Visa Card",
    date: "2025-01-16",
    time: "12:45 PM",
    items: [
      { itemNumber: 1, title: "Chinese Spring Roll Starter", quantity: 2, price: 25000 },
      { itemNumber: 2, title: "Texas BBQ Steak & Burger", quantity: 1, price: 30000 },
      { itemNumber: 3, title: "Soft Drink", quantity: 3, price: 40000 },
    ],
    discountCode: "NEWYEAR25",
    deliveryFee: 5000,
  };

  const calculateSubtotal = () =>
    receiptData.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = receiptData.discountCode ? 0.25 * subtotal : 0; // 25% discount for example
    return subtotal - discount + receiptData.deliveryFee;
  };

  const subtotal = calculateSubtotal();
  const total = calculateTotal();

  return (
    <div className="min-h-screen flex items-center justify-center mt-10 bg-slate-300 py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">
            <span className="text-orange-600">{receiptData.restaurantName}</span>{" "}
            <span className="text-black">{receiptData.restaurantType}</span>
          </h1>
          <p className="text-sm text-gray-500">{receiptData.restaurantEmail}</p>
          <p className="text-sm text-gray-500">{receiptData.restaurantPhone}</p>
        </div>
        <div className="border-b border-gray-200 pb-4 mb-4">
          <p className="text-gray-700">
            <span className="font-semibold">Payment Method:</span> {receiptData.paymentMethod}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Date:</span> {receiptData.date}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Time:</span> {receiptData.time}
          </p>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              <th className="text-left py-2">#</th>
              <th className="text-left py-2">Item</th>
              <th className="text-center py-2">Qty</th>
              <th className="text-right py-2">Price</th>
              <th className="text-right py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {receiptData.items.map((item) => (
              <tr key={item.itemNumber} className="text-gray-700 text-sm border-b">
                <td className="py-2">{item.itemNumber}</td>
                <td className="py-2">{item.title}</td>
                <td className="py-2 text-center">{item.quantity}</td>
                <td className="py-2 text-right">{item.price.toLocaleString()} NGN</td>
                <td className="py-2 text-right">
                  {(item.quantity * item.price).toLocaleString()} NGN
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-t border-gray-200 pt-4 text-gray-700">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>{subtotal.toLocaleString()} NGN</span>
          </div>
          {receiptData.discountCode && (
            <div className="flex justify-between mb-2">
              <span>Discount ({receiptData.discountCode}):</span>
              <span>- {(0.25 * subtotal).toLocaleString()} NGN</span>
            </div>
          )}
          <div className="flex justify-between mb-2">
            <span>Delivery Fee:</span>
            <span>{receiptData.deliveryFee.toLocaleString()} NGN</span>
          </div>
          <div className="flex justify-between font-bold text-gray-800 text-lg">
            <span>Total:</span>
            <span>{total.toLocaleString()} NGN</span>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Thank you for choosing{" "}
          <span className="text-orange-600">{receiptData.restaurantName}</span>{" "}
          <span className="text-black">{receiptData.restaurantType}</span>! Your order will be
          delivered soon.
        </p>
      </div>
    </div>
  );
};

export default BillingReceipt;






