import React from 'react';
import Nav from './Nav';
import Foot from './Foot';

const About = () => {
  return (
    <>
      <Nav />

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center bg-gray-50 p-6 gap-6">
        <div className="lg:max-w-xl p-6">
          <p className="text-xl lg:text-2xl font-bold font-serif text-black mb-4">
            Welcome to ShopEase, your one-stop destination for effortless and enjoyable online shopping!
          </p>
          <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
            At ShopEase, we believe that shopping should be simple, fast, and stress-free. Whether you’re stocking up on daily essentials, searching for the latest trends, or finding that perfect gift, we’ve got you covered with an extensive range of high-quality products at competitive prices.
            <br /><br />
            Our mission is to make online shopping easier and more accessible for everyone. With a user-friendly interface, secure payment options, and lightning-fast delivery, we prioritize your convenience and satisfaction every step of the way.
          </p>
        </div>
        <img
          src="/image/about.jpg"
          className="w-full lg:w-96 h-60 lg:h-96 object-cover rounded-lg shadow-lg"
          alt="About ShopEase"
        />
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white p-6">
        <p className="text-2xl md:text-3xl font-bold font-serif text-center mb-4">
          Why Choose ShopEase?
        </p>
        <hr className="mx-10 bg-slate-800 h-1 mb-6" />
        <div className="m-10 text-base md:text-lg text-slate-700 space-y-4 text-center">
          <p>🛍️ <strong>Wide Variety:</strong> From fashion and electronics to home essentials and beyond, find everything under one roof.</p>
          <p>💸 <strong>Affordable Pricing:</strong> Quality products at prices you'll love—shop more, save more.</p>
          <p>🚀 <strong>Seamless Experience:</strong> Smooth browsing, fast checkout, and easy returns—just how shopping should be.</p>
          <p>🤝 <strong>24/7 Support:</strong> Got questions? We’re always here to help—day or night.</p>

          <p>We’re not just a store—we're your shopping partner. At ShopEase, we listen, adapt, and evolve to make your experience better every time.</p>

          <p>Join millions of happy customers who trust us to make shopping simple and joyful. 🛒✨</p>

          <p className="font-bold">Let’s make shopping smarter, together. Explore. Discover. Shop with ease. </p>
        </div>

        <div className="text-center mt-6">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">
            Start Shopping
          </button>
        </div>
      </div>

      <Foot />
    </>
  );
};

export default About;
