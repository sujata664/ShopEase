import React from 'react';
import Nav from './Nav';
import Foot from './Foot';

const About = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-wrap flex-col lg:flex-row items-center lg:items-start lg:justify-center bg-gray-50 p-6">
        <div className="lg:max-w-2xl p-6">
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
          className="w-full lg:w-auto h-60 lg:h-96 object-contain m-6"
          alt="About ShopEase"
        />
      </div>

      <div className="bg-white p-6">
        <p className="text-2xl md:text-3xl font-bold font-serif text-center mb-4">
          Why Choose ShopEase?
        </p>
        <hr className='mx-10 bg-slate-800 h-1' />
        <p className="m-10 text-base text-center md:text-lg text-slate-700 space-y-4">
  <p>🛍️ <strong>Wide Variety:</strong> From fashion and electronics to home essentials and beyond, find everything under one roof.</p>
  <p>💸 <strong>Affordable Pricing:</strong> Quality products at prices you'll love—shop more, save more.</p>
  <p>🚀 <strong>Seamless Experience:</strong> Smooth browsing, fast checkout, and easy returns—just how shopping should be.</p>
  <p>🤝 <strong>24/7 Support:</strong> Got questions? We’re always here to help—day or night.</p>

  <p className="mt-6">We’re not just a store—we're your shopping partner. At ShopEase, we listen, adapt, and evolve to make your experience better every time.</p>

  <p className="mt-4">Join millions of happy customers who trust us to make shopping simple and joyful. 🛒✨</p>

  <p className="mt-4 font-bold">Let’s make shopping smarter, together. Explore. Discover. Shop with ease. </p>
</p>

      </div>
      <Foot />
    </>
  );
};

export default About;
