import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [customerData, setCustomerData] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch('/api/customers'); // Replace with your API endpoint
        const data = await response.json();
        setCustomerData(data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomerData();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <>
      <h1 className="text-4xl font-bold underline text-center my-5">Customer Info</h1>

      <div className="flex flex-col px-4 sm:px-6 items-center lg:px-8">
        {/* Header Row */}
        <div className="bg-gray-200 rounded-t-3xl shadow-md flex justify-between p-4 lg:w-6/12 w-full max-w-3xl">
          <p className="text-xl font-bold text-center w-1/12">SN</p>
          <p className="text-xl font-bold text-center w-2/12">Name</p>
          <p className="text-xl font-bold text-center w-2/12">Phone</p>
          <p className="text-xl font-bold text-center w-3/12">Email</p>
          <p className="text-xl font-bold text-center w-4/12">Message</p>
        </div>

        {/* Customer Data Rows */}
        {customerData.length > 0 ? (
          customerData.map((customer, index) => (
            <div
              key={customer.id}
              className={`flex justify-between items-center p-4 lg:w-6/12 w-full max-w-3xl ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              } border-b`}
            >
              <p className="text-center w-1/12">{index + 1}</p>
              <p className="text-center w-2/12">{customer.name}</p>
              <p className="text-center w-2/12">{customer.phone}</p>
              <p className="text-center w-3/12">{customer.email}</p>
              <p className="text-center w-4/12">{customer.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No customer data available.</p>
        )}
      </div>
    </>
  );
};

export default Contact;
