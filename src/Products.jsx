import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import Foot from './Foot'
<Nav />
export default function Products() {
  
  const ProductCard = () => (

   <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 text-center transition duration-300 ease-in-out transform hover:-translate-y-1">
  <img
    src="image/img1.jpg"
    alt="Product"
    className="mx-auto h-36 mb-3 object-contain"
  />
  <h3 className="text-base font-semibold text-gray-800">Product Name</h3>
  <p className="text-orange-600 font-bold">Rs 500</p>
  <button className="mt-3 px-4 py-2 bg-slate-800 hover:bg-orange-600 text-white text-sm rounded-full transition">
    Add to Cart
  </button>
</div>

  );

  const ProductGrid = ({ title }) => (
    <section>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );

  const Header = () => (
    <Nav />
  );

  const SidebarLeft = () => (
    <aside className="space-y-6">
      <div>
        <h2 className="font-bold text-lg">Categories</h2>
        <ul className="text-sm space-y-1">
          <li>Skincare</li>
          <li>Footwear</li>
          <li>Accessories</li>
          <li>Clothing</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-lg">Leading Brands</h2>
        <ul className="text-sm space-y-1">
          <li>Bata</li>
          <li>Zara</li>
          <li>Daily Wear</li>
          <li>Citaphil</li>
        </ul>
      </div>
    </aside>
  );

  const SidebarRight = () => (
    <aside className="space-y-4">
      <h2 className="font-bold text-lg">Top Sellers</h2>
      <ul className="text-sm space-y-2">
       <li>Bata</li>
          <li>Zara</li>
          <li>Daily Wear</li>
          <li>Citaphil</li>
      </ul>
    </aside>
    
  );

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <div className="md:col-span-1">
          <SidebarLeft />
        </div>

        <main className="md:col-span-2 space-y-8">
          <ProductGrid title="Featured Products" />
          <hr className=' bg-slate-800 h-1' />
          <ProductGrid title="New Products" />
        </main>

        <div className="md:col-span-1">
          <SidebarRight />
        </div>
      </div>
      <Foot />
    </div>
    
  );
}
