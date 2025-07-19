import React from 'react';
import Nav from './Nav';
import Foot from './Foot';

const Cart = () => {
  return (
    <>
      <Nav />
      <div className="p-4 md:p-10">
        <p className="text-3xl font-serif font-bold mb-6 text-center">Your Cart Items</p>

        <div className="container mx-auto flex flex-col lg:flex-row gap-10 justify-between">
          {/* Cart Items Section */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="shadow-2xl flex flex-col sm:flex-row items-center p-4 bg-white rounded-lg">
              <img src="image/img1.jpg" className="h-36 w-auto mb-4 sm:mb-0 sm:mr-4" alt="cart item" />
              <div>
                <p className="text-xl m-2">Price: Rs 500</p>
                <p className="text-xl m-2">Quantity: 1</p>
                <p className="text-xl m-2">Total: Rs 500</p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3 shadow-2xl bg-white p-6 rounded-lg flex flex-col justify-between">
            <div>
              <p className="text-xl m-2">Subtotal Price: Rs 500</p>
              <p className="text-xl m-2">Taxes: Rs 50</p>
              <p className="text-xl m-2">Delivery Charges: Rs 30</p>
              <p className="text-2xl font-bold m-2">Total Price: Rs 580</p>
            </div>
            <button className="text-xl bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-slate-700 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Cart;
