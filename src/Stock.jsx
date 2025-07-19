import React from 'react';

const Contact = () => {
  
  const productData = [
    { id: 1, name: 'T-shirt', quantity: '12',  price: '100' },
    { id: 2, name: 'Shirt', quantity: '98',  price: '500' },
 
  ];

  return (
    <>
      <h1 className="text-4xl font-bold underline text-center my-5">product Info</h1>

      <div className="flex flex-col px-4 sm:px-6 items-center lg:px-8">
    
        <div className="bg-gray-200 rounded-t-3xl shadow-md flex justify-between p-4 lg:w-6/12 w-full max-w-3xl">
          <p className="text-xl font-bold text-center w-1/12">SN</p>
          <p className="text-xl font-bold text-center w-2/12">Name</p>
          <p className="text-xl font-bold text-center w-2/12">Quantity</p>
          <p className="text-xl font-bold text-center w-3/12">Price</p>
        </div>

      
        {productData.map((product, index) => (
          <div
            key={product.id}
            className={`flex justify-between items-center p-4 lg:w-6/12 w-full max-w-3xl ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
            } border-b`}
          >
            <p className="text-center w-1/12">{index + 1}</p>
            <p className="text-center w-2/12">{product.name}</p>
            <p className="text-center w-2/12">{product.quantity}</p>
            <p className="text-center w-3/12">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
