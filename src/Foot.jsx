import React from 'react'
import { Link } from 'react-router-dom'
const Foot = () => {
  return (
    <>
    <div className='bg-slate-800 lg:h-64 p-6'>
    <div className='flex flex-wrap px-10 pt-10 items-center justify-center gap-24 text-md'>
    <img src="/image/ssss.png" alt="logo" className="h-18 w-32 m-5 cursor-pointer mr-4" />

    

        <ul className='text-slate-300 '>
            <li ><Link to="./About" >About Us</Link></li>
            <li><Link to="./Contact" >Contact Us</Link></li>
            <li> <Link to="./Offer" >Offers</Link></li>
            <li><Link to="./Terms" >Terms & Conditions</Link></li>
        </ul>

        
    </div>

         
    </div>
    
    </>
  )
}

export default Foot