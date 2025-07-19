import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <>
       <div className='bg-slate-200 h-14 w-full justify-end text-end '>
   <NavLink to="/Admin"><FontAwesomeIcon icon={faUser} className='cursor-pointer' /></NavLink> 
        <NavLink to="/"><button className='p-4 mx-3 font-semibold text-lg hover:text-black'>Logout</button></NavLink>
    </div>
      
      <div className="flex ">
        <Sidebar />
        
        <div className="flex-1 p-4 bg-blue-100 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-2 items-center my-8">

          <div className="bg-white rounded-3xl shadow-2xl p-6 m-3 flex flex-col items-center">
              <p className="font-semibold text-2xl text-center mb-4">Product</p>
              <NavLink to="/product">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-700 transition duration-300 transform hover:-translate-y-2">
                  Update
                </button>
              </NavLink>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 m-3 flex flex-col items-center">
              <p className="font-semibold text-2xl text-center mb-4">Stock</p>
              <NavLink to="/stock">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-700 transition duration-300 transform hover:-translate-y-2">
                  Update
                </button>
              </NavLink>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 m-3 flex flex-col items-center">
              <p className="font-semibold text-2xl text-center mb-4">Earning</p>
              <NavLink to="/Earning">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-700 transition duration-300 transform hover:-translate-y-2">
                  Update
                </button>
              </NavLink>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 m-3 flex flex-col items-center">
              <p className="font-semibold text-2xl text-center mb-4">Order Status</p>
              <NavLink to="/order">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-700 transition duration-300 transform hover:-translate-y-2">
                  Update
                </button>
              </NavLink>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 m-3 flex flex-col items-center">
              <p className="font-semibold text-2xl text-center mb-4">Review</p>
              <NavLink to="/review">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-700 transition duration-300 transform hover:-translate-y-2">
                  Update
                </button>
              </NavLink>
            </div>


            <div className="bg-white rounded-3xl shadow-2xl p-6 m-3 flex flex-col items-center">
              <p className="font-semibold text-2xl text-center mb-4">Returns</p>
              <NavLink to="/return">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-700 transition duration-300 transform hover:-translate-y-2">
                  Update
                </button>
              </NavLink>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 m-3 flex flex-col items-center">
              <p className="font-semibold text-2xl text-center mb-4">Contact Info</p>
              <NavLink to="/Contact">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-700 transition duration-300 transform hover:-translate-y-2">
                  Update
                </button>
              </NavLink>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
