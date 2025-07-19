import React from 'react'
import { useState } from 'react'
const Earning = () => {
  const [Data,setData]=useState("");
  const [SubmittedData,setSubmittedData]=useState("");

  const handleChange =(e)=>{setData (e.target.value)};

  const handleSubmit =()=>{
    if (Data.trim() !==""){
    setSubmittedData(Data)
      setData("")}};
  
      const handleEdit=()=>{
        setData(SubmittedData)
        setSubmittedData("")
      };

      const handleDelete=()=>{
        setSubmittedData("")
      };

  return (
    <>
    <h1 className="text-4xl font-bold underline text-center my-5">Earnings</h1>
    <div className='bg-slate-200 shadow-2xl items-center justify-center m-20 p-10 w-80'>
    <label>Text </label><br />
      <input type='text' id= "info" value={Data} onChange={handleChange} className='p-3' /><br /> <br />
    <button type='submit'className='p-2 bg-slate-400' onClick={handleSubmit}>submit</button>
    </div>

    
    {SubmittedData ? (
  <div className='text-center'>
    <p className='m-20'>Data: <br /> {SubmittedData}</p>
    <div className='flex justify-center m-10'>
      <button className='p-2 mx-5 bg-lime-400' onClick={handleEdit}>Edit</button>
      <button className='p-2 mx-5 bg-red-500' onClick={handleDelete}>Delete</button>
    </div>
  </div>
) : (
  <p className="text-center">No data submitted</p>
)}

    </>
  )
}

export default Earning