import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
   <div className='bg-blue-100 h-svh p-5'>
   <h1 className="text-4xl font-bold underline justify-center text-center my-5">
      Admin Login
    </h1>

    <div className="flex flex-col px-4 sm:px-6 items-center lg:px-8">
    <div className=" lg:flex-row items-center my-10  bg-white rounded-3xl shadow-2xl lg:h-96 lg:w-4/12 p-6">
        <label className='p-2 font-semibold'>Email</label><br />
    <input type='text' id="email" placeholder='Email' required className=' bg-gray-200 rounded-lg p-2  lg:w-3/4 m-2'></input><br/>
    <label className='p-2 font-semibold'>Password</label><br/>
    <input type='text' id="email" placeholder='Password' required className=' bg-gray-200 rounded-lg p-2 lg:w-3/4 m-2' ></input><br/>
    <NavLink to="/dashboard">
    <button className="px-6 py-3 my-8 bg-blue-600 text-white rounded-full hover:text-black transition duration-300 transform hover:-translate-y-2">
              Login
            </button>
    </NavLink>
    <div>Don't have an account?<NavLink to="/Register"
    className=" text-gray-500  hover:text-black "> Register.
    </NavLink></div>
    </div>
    
    </div>
   



    <div className=' shadow-2xl  rounded-lg p-3 m-3'>
      <img src='image/img1.jpg' className='h-36'/>
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img2.jpg' className='h-36' />
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img3.jpg' className='h-36' />
    </div>


    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img4.jpg' className='h-36' />
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img5.jpg' className='h-36' />
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img6.jpg' className='h-36' />
    </div>

    <div className=' shadow-2xl rounded-lg p-3 m-3'>
      <img src='image/img7.jpg' className='h-36' />
    </div>
    
   </div>




  )
}

export default Login