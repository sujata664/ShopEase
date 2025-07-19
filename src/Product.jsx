import React, { useState } from 'react';

const Product = () => {
  const [productName, setProductName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [model, setModel] = useState('');
  const [tags, setTags] = useState('');
  const [tagList, setTagList] = useState([]);
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTag = () => {
    if (tags.trim() && !tagList.includes(tags.trim())) {
      setTagList([...tagList, tags.trim()]);
      setTags('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTagList(tagList.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    const productData = {
      id: editIndex !== null ? products[editIndex].id : Date.now(),
      productName,
      cost,
      category,
      image,
      quantity,
      subCategory,
      model,
      tags: tagList,
    };

    if (editIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = productData;
      setProducts(updatedProducts);
      setEditIndex(null);
    } else {
      setProducts([...products, productData]);
    }

    clearForm();
  };

  const handleEdit = (index) => {
    const product = products[index];
    setProductName(product.productName);
    setCost(product.cost);
    setCategory(product.category);
    setImage(product.image);
    setQuantity(product.quantity);
    setSubCategory(product.subCategory);
    setModel(product.model);
    setTagList(product.tags);
    setEditIndex(index);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const clearForm = () => {
    setProductName('');
    setCost('');
    setCategory('');
    setImage(null);
    setQuantity('');
    setSubCategory('');
    setModel('');
    setTagList([]);
    setTags('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
      <h1 className="text-4xl font-bold underline justify-center text-center my-5">
        Product Management
      </h1>
      <div className="flex flex-col px-4 sm:px-6 items-center lg:px-8">
        <div className="lg:flex flex-wrap justify-between items-center my-10 bg-white rounded-3xl shadow-2xl lg:w-7/12 p-6 gap-4">
          <div className="flex flex-col lg:w-5/12">
            <label htmlFor="name" className="p-2 font-semibold">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Product Name"
              required
              className="bg-gray-200 rounded-lg p-2 w-full"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:w-5/12">
            <label htmlFor="cost" className="p-2 font-semibold">
              Cost
            </label>
            <input
              type="text"
              id="cost"
              placeholder="Cost"
              required
              className="bg-gray-200 rounded-lg p-2 w-full"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:w-5/12">
            <label htmlFor="category" className="p-2 font-semibold">
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Category"
              required
              className="bg-gray-200 rounded-lg p-2 w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:w-5/12">
            <label htmlFor="image" className="p-2 font-semibold">
              Image
            </label>
            <input
              type="file"
              id="image"
              className="bg-gray-200 rounded-lg p-2 w-full"
              onChange={handleImageChange}
            />
          </div>
          <div className="flex flex-col lg:w-5/12">
            <label htmlFor="quantity" className="p-2 font-semibold">
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              placeholder="Quantity"
              required
              className="bg-gray-200 rounded-lg p-2 w-full"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:w-5/12">
            <label htmlFor="sub-category" className="p-2 font-semibold">
              Sub-category
            </label>
            <input
              type="text"
              id="sub-category"
              placeholder="Sub-category"
              required
              className="bg-gray-200 rounded-lg p-2 w-full"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:w-5/12">
            <label htmlFor="model" className="p-2 font-semibold">
              Model
            </label>
            <input
              type="text"
              id="model"
              placeholder="Model"
              required
              className="bg-gray-200 rounded-lg p-2 w-full"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="p-2 font-semibold">Tags</label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Add a tag"
                className="bg-gray-200 rounded-lg p-2 w-3/4 m-2"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <button
                onClick={handleAddTag}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition duration-300"
              >
                Add Tag
              </button>
            </div>
            <div className="flex flex-wrap mt-2">
              {tagList.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-300 text-black px-4 py-2 rounded-full m-2 flex items-center"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-red-600 font-bold"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 my-8 bg-blue-600 text-white rounded-full hover:text-black transition duration-300 transform hover:-translate-y-2"
          >
            {editIndex !== null ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </div>
      <div className="flex flex-col px-4 sm:px-6 items-center lg:px-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="w-full lg:w-7/12 bg-white rounded-lg shadow-lg p-4 mb-4"
          >
            <h2 className="text-xl font-bold">{product.productName}</h2>
            {product.image && (
              <img
                src={URL.createObjectURL(product.image)}
                alt="Uploaded"
                className="rounded-lg max-h-40"
              />
            )}
            <p>Cost: {product.cost}</p>
            <p>Category: {product.category}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Sub-category: {product.subCategory}</p>
            <p>Model: {product.model}</p>
            <p>Tags: {product.tags.join(', ')}</p>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => handleEdit(index)}
                className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
