import React, { useState } from "react";
import { FcProcess } from "react-icons/fc";

const OrderDish = () => {

  return (
    <div className='mt-2 px-4 col-span-3  '>
      <div className="flex items-start py-4 border-b">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/11/00/48/spring-roll-8753837_1280.jpg"
          alt="Chinese Spring Roll Starter"
          className="w-24 h-24 object-cover"
        />
        <div className="ml-4 flex-grow">
          <h2 className="text-lg font-medium">Chinese Spring Roll Starter</h2>
          <p className="mt-2">£35.00</p>
          {/* Quantity */}
         
          {/* Actions */}
          <div className="flex items-center">
          <button className="flex items-center bg-slate-950 py-1 px-2 rounded text-white hover:underline">
              <FcProcess className="mr-2 w-7 h-7" />Process Order
            </button>
            
          </div>
        </div>
      </div>

      {/* Another cart item */}
      <div className="flex items-start py-4 border-b">
        <img
          src="https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg"
          alt="Texas BBQ Steak & Burger"
          className="w-24 h-24 object-cover"
        />
        <div className="ml-4 flex-grow">
          <h2 className="text-lg font-medium">Texas BBQ Steak & Burger</h2>
          <p className="mt-2">£25.00</p>
          {/* Quantity */}
         
          {/* Actions */}
          <div className="flex items-center">
          <button className="flex items-center bg-slate-950 py-1 px-2 rounded text-white hover:underline">
              <FcProcess className="mr-2 w-7 h-7" />Process Order
            </button>
          </div>
        </div>
      </div>

      {/* Another cart item */}
      <div className="flex items-start py-4 border-b">
        <img
          src="https://cdn.pixabay.com/photo/2022/07/15/18/16/beef-burger-7323692_1280.jpg"
          alt="Texas BBQ Steak & Burger"
          className="w-24 h-24 object-cover"
        />
        <div className="ml-4 flex-grow">
          <h2 className="text-lg font-medium">Texas BBQ Steak & Burger</h2>
          <p className="mt-2">£25.00</p>
          {/* Quantity */}
         
          {/* Actions */}
          <div className="flex items-center">
          <button className="flex items-center bg-slate-950 py-1 px-2 rounded text-white hover:underline">
              <FcProcess className="mr-2 w-7 h-7" />Process Order
            </button>
          </div>
        </div>
      </div>



    </div>
  )
}

export default OrderDish

