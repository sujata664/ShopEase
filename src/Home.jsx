import React from "react"
import Nav from "./Nav"
import Foot from "./Foot"
import { Link } from "react-router-dom"

const categories = [
  {
    title: "Fashion",
    price: "From Rs 999",
    image: "image/box8_image.jpg",
  },
  {
    title: "Beauty Essentials",
    price: "From Rs 699",
    image: "image/box5_image.jpg",
  },
  {
    title: "Home & Kitchen",
    price: "From Rs 1299",
    image: "image/kitchen.jpg",
  },
  {
    title: "Personal Care",
    price: "From Rs 199",
    image: "image/box2_image.jpg",
  },
  {
    title: "Bags & Footwear",
    price: "From Rs 1499",
    image: "image/bags.jpg",
  },
]

const products = [
  {
    name: "Wireless Earbuds",
    price: 2999,
    oldPrice: 3999,
    discount: "-20%",
    image: "image/img2.jpg",
  },
  {
    name: "Crop Tops",
    price: 1490,
    oldPrice: 1990,
    discount: "-50%",
    image: "image/img1.jpg",
  },
  {
    name: "Air Fryer",
    price: 3999,
    oldPrice: 5999,
    discount: "-30%",
    image: "image/img8.jpg",
  },
  {
    name: "phone covers",
    price: 299,
    oldPrice: 400,
    discount: "-40%",
    image: "image/img4.jpg",
  },
]

const Home = () => {
  return (
    <>
      <Nav />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Find Your Everyday <br /> Essentials
            </h1>
            <p className="text-gray-600 mt-4 max-w-md">
              Explore our latest selections with special discounts on quality
              products.
            </p>
            <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition">
              Shop Now
            </button>
          </div>

          <div className="relative">
            <img
              src="image/hero1.png"
              alt="Hero Product"
              className="w-full rounded-xl shadow-lg"
            />
            <span className="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg">
              Up to 20% OFF
            </span>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.price}</p>
                <Link
                  to="/products"
                  className="inline-block mt-3 px-4 py-1.5 bg-orange-500 text-white text-sm rounded-full hover:bg-orange-600"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <span className="text-sm text-gray-500">Sort by: Featured</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 relative hover:shadow-2xl transition"
              >
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-44 w-full object-contain"
                />

                <h3 className="mt-4 font-semibold">{product.name}</h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-orange-600 font-bold">
                    Rs {product.price}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    Rs {product.oldPrice}
                  </span>
                </div>

                <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full text-sm transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>🚚 Fast & Free Delivery</div>
          <div>🔒 Secure Payments</div>
          <div>↩ Easy Returns</div>
          <div>📞 24/7 Support</div>
        </div>
      </section>

      <Foot />
    </>
  )
}

export default Home
