import React from 'react'
import Nav from './Nav'
import Foot from './Foot'
const Formss = () => {
  return (
    <>
    <Nav />
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='text-center md:w-1/2'>
          <p className="font-bold lg:text-5xl text-3xl text-cyan-950 m-4">Get in Touch with Us</p>
          <p className="text-md text-slate-600 max-w-2xl mx-4 md:mx-14">
          We’re here to support you every step of the way. Whether you have a question about your order, need assistance with our products, or want to share feedback, we’re always ready to help. Feel free to reach out to us using the contact details below or through our convenient online form. At ShopEase, we’re committed to making your shopping experience seamless and enjoyable, and we look forward to connecting with you soon.
          </p>
        </div><div className='flex flex-wrap    items-center justify-center m-6'>
    
   
  
    </div>
    

        
        <div className='m-4 md:m-10 md:w-1/2'>
          <form className="rounded-3xl shadow-2xl h-auto w-full m-2 bg-blue-950 text-white p-6 md:p-11">
            <label className='p-2 font-semibold'>Your Name</label><br />
            <input type='text' id="name" placeholder='Name' required className='p-2 text-black rounded-lg w-full m-2' /><br />
            
            <label className='p-2 font-semibold'>Your Email</label><br />
            <input type='email' id="email" placeholder='Email' required className='p-2 text-black rounded-lg w-full m-2' /><br />
            
            <label className='p-2 font-semibold'>Contact Number</label><br />
            <input type='number' id="contact" placeholder='Number' required className='p-2 text-black rounded-lg w-full m-2' /><br />
            
            <label className='p-2 font-semibold'>Subject</label><br />
            <input type='text' id="subject" placeholder='Subject' required className='p-2 text-black rounded-lg w-full m-2' /><br />
            
            <label className='p-2 font-semibold'>Tell Us About Yourself</label><br />
            <textarea id="message" placeholder='Tell Us About Yourself' required className='p-2 text-black rounded-lg w-full m-2'></textarea><br />
            
            <label className="p-2 font-semibold">Preferred Time For Contact</label><br />
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex items-center">
                <input type="checkbox" id="morning" required className="p-2 rounded-lg" />
                <span>Morning</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="afternoon" required className="p-2 rounded-lg" />
                <span>Afternoon</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="evening" required className="p-2 rounded-lg" />
                <span>Evening</span>
              </div>
            </div>
            
            <label className='p-2 font-semibold'>Other Specify</label><br />
            <textarea id="other" placeholder='Please Specify' required className='p-2 text-black rounded-lg w-full m-2'></textarea><br />
            
            <button className="px-6 py-3 my-8 bg-red-500 text-white rounded-full hover:text-black transition duration-300 transform hover:-translate-y-2">
              Contact
            </button>
          </form>
        </div>
      </div>
      <Foot />
    </>
  )
}

export default Formss
