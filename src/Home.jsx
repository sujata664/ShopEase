import React from 'react'
import Nav from './Nav'
import Foot from './Foot'
import { Link } from 'react-router-dom'
import Carousel from './Crousel'
const Home = () => {
  return (
    <>
   <Nav />
   <div className='' >
    
    <div className='flex flex-wrap items-center justify-center m-11'>
    <Carousel />
</div>
        <div className="flex items-center justify-center">
      <p className="text-3xl font-serif font-bold text-center m-8">
        Crafted For Your Everyday Needs.
      </p>
     
      </div>
       <marquee></marquee>
      <div className="flex items-center justify-center flex-wrap">
    <div className=' shadow-2xl  rounded-lg p-3 m-3'>
      <img src='image/img1.jpg' className='h-36'/>
      <h3 className="text-base font-semibold text-gray-800">Product Name</h3>
  <p className="text-orange-600 font-bold">Rs 500</p>
  <button className="mt-3 px-4 py-2 bg-slate-800 hover:bg-orange-600 text-white text-sm rounded-full transition">
    Add to Cart
  </button>
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img2.jpg' className='h-36' />
      <h3 className="text-base font-semibold text-gray-800">Product Name</h3>
  <p className="text-orange-600 font-bold">Rs 500</p>
  <button className="mt-3 px-4 py-2 bg-slate-800 hover:bg-orange-600 text-white text-sm rounded-full transition">
    Add to Cart
  </button>
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img3.jpg' className='h-36' />
      <h3 className="text-base font-semibold text-gray-800">Product Name</h3>
  <p className="text-orange-600 font-bold">Rs 500</p>
  <button className="mt-3 px-4 py-2 bg-slate-800 hover:bg-orange-600 text-white text-sm rounded-full transition">
    Add to Cart
  </button>
    </div>


    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img4.jpg' className='h-36' />
      <h3 className="text-base font-semibold text-gray-800">Product Name</h3>
  <p className="text-orange-600 font-bold">Rs 500</p>
  <button className="mt-3 px-4 py-2 bg-slate-800 hover:bg-orange-600 text-white text-sm rounded-full transition">
    Add to Cart
  </button>
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img5.jpg' className='h-36' />
      <h3 className="text-base font-semibold text-gray-800">Product Name</h3>
  <p className="text-orange-600 font-bold">Rs 500</p>
  <button className="mt-3 px-4 py-2 bg-slate-800 hover:bg-orange-600 text-white text-sm rounded-full transition">
    Add to Cart
  </button>
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img6.jpg' className='h-36' />
      <h3 className="text-base font-semibold text-gray-800">Product Name</h3>
  <p className="text-orange-600 font-bold">Rs 500</p>
  <button className="mt-3 px-4 py-2 bg-slate-800 hover:bg-orange-600 text-white text-sm rounded-full transition">
    Add to Cart
  </button>
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img7.jpg' className='h-36' />
      <h3 className="text-base font-semibold text-gray-800">Product Name</h3>
  <p className="text-orange-600 font-bold">Rs 500</p>
  <button className="mt-3 px-4 py-2 bg-slate-800 hover:bg-orange-600 text-white text-sm rounded-full transition">
    Add to Cart
  </button>
    </div>
    </div>
   
<div className='text-xl font-serif font-bold text-center mt-16'> OUR FEATURED PRODUCTS</div>
    <div className='flex flex-wrap items-center justify-center m-6'>
    
    <div className=' shadow-2xl  rounded-lg p-5 m-3'>  
      <h5 >Fashion & Trends</ h5>
    <img  src="image/box8_image.jpg" className='lg:h-72 h-52 lg:w-80 w-60' />
   <Link to="" className='text-red-500 m-3 text-lg '>See More</Link>
    
    </div>
    
    <div className=' shadow-2xl  rounded-lg p-5 m-3'>  
      <h5 >Beauty Essentials </ h5>
    <img  src="image/box5_image.jpg" className='lg:h-72 h-52 lg:w-80 w-60' />
   <Link to="" className='text-red-500 m-3 text-lg '>See More</Link>
    </div>
   
    
    <div className=' shadow-2xl  rounded-lg p-5 m-3'>  
    <h5 >Home & Kitchen </ h5>
    <img  src="image/kitchen.jpg" className='lg:h-72 h-52 lg:w-80 w-60' />
   <Link to="" className='text-red-500 m-3 text-lg '>See More</Link>
    </div>
   
    
    <div className=' shadow-2xl  rounded-lg p-5 m-3'>  
    <h5 > Personal Care </ h5>
    <img  src="image/box2_image.jpg" className='lg:h-72 h-52 lg:w-80 w-60' />
   <Link to="" className='text-red-500 m-3 text-lg '>See More</Link>
   
    </div>


    
    <div className=' shadow-2xl  rounded-lg p-5 m-3'>  
      <h5 >Bags & Footwear</ h5>
    <img  src="image/bags.jpg" className='lg:h-72 h-52 lg:w-80 w-60' />
   <Link to="" className='text-red-500 m-3 text-lg '>See More</Link>
    
    </div>
    
    <div className=' shadow-2xl  rounded-lg p-5 m-3'>  
    <h5 >Accessories </ h5>
    <img  src="image/jewele.jpg" className='lg:h-72 h-52 lg:w-80 w-60' />
   <Link to="" className='text-red-500 m-3 text-lg '>See More</Link>
    </div>

    
    </div>
    </div>

    <Foot />



   </>
  )
}

export default Home