import React from "react";

const RestaurantBill = () => {
  const contactDetails = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, City, Country",
  };

  const items = [
    {
      name: "Chinese Spring Roll Starter",
      price: 35.0,
      quantity: 2,
      image:
        "https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg",
    },
    {
      name: "Texas BBQ Steak & Burger",
      price: 25.0,
      quantity: 1,
      image:
        "https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg",
    },
  ];

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePaymentConfirm = () => {
    alert("Payment Confirmed! Thank you for your order.");
    console.log("Payment Confirmed: Order Details", { contactDetails, items, total: calculateTotal() });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="text-center mb-8">
      <h3 className="text-2xl mt-2 font-bold text-gray-800 mb-2 text-center">
          <span className="text-orange-500">Rusto</span> Restaurant Dine in Bill
        </h3>
        <p className="text-gray-500">Thank you for dining with us!</p>
      </div>

      {/* Customer Details */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Customer Details</h2>
        <div className="mt-2 text-gray-600">
          <p><span className="font-medium">Name:</span> {contactDetails.firstName} {contactDetails.lastName}</p>
          <p><span className="font-medium">Email:</span> {contactDetails.email}</p>
          <p><span className="font-medium">Phone:</span> {contactDetails.phone}</p>
          <p><span className="font-medium">Address:</span> {contactDetails.address}</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Order Summary</h2>
        <div className="mt-4 space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">£{item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
              <p className="font-medium text-gray-800">£{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Total Amount */}
      <div className="border-t pt-4">
        <div className="flex justify-between text-lg font-semibold text-gray-800">
          <span>Total:</span>
          <span>£{calculateTotal()}</span>
        </div>
        <p className="text-sm text-gray-500">(Excludes delivery charges)</p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <button
          onClick={handlePaymentConfirm}
          className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default RestaurantBill;
