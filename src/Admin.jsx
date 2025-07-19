import React, { useState } from 'react';

const AddAdmin = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [admins, setAdmins] = useState([]);

 
  const [message, setMessage] = useState('');

 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setMessage('All fields are required!');
      return;
    }


    const newAdmin = { id: Date.now(), name, email, password };
    setAdmins([...admins, newAdmin]);

   
    setName('');
    setEmail('');
    setPassword('');
    setMessage('Admin added successfully!');
  };

  
  const handleDelete = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
    setMessage('Admin removed successfully!');
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold underline text-center my-5">Add Admin</h1>

   
      <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 lg:h-auto lg:w-6/12 w-full max-w-3xl">
        <form onSubmit={handleSubmit}>
        
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter admin name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-800 transition duration-300 transform hover:-translate-y-1"
            >
              Add Admin
            </button>
          </div>
        </form>

        
        {message && (
          <p
            className={`mt-4 text-center font-semibold ${
              message.includes('success') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>

      
      <hr className="my-8 border-t-2 border-gray-300 w-11/12 mx-auto" />
      <div className="w-full lg:w-6/12 max-w-3xl">
        {admins.length > 0 ? (
          admins.map((admin, index) => (
            <div
              key={admin.id}
              className={`flex justify-between items-center p-4 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              } border-b`}
            >
              <div>
                <h3 className="text-lg font-semibold">{admin.name}</h3>
                <p className="text-gray-700">Email: {admin.email}</p>
              </div>
              <button
                onClick={() => handleDelete(admin.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-800"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No admins added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddAdmin;
