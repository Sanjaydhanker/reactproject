import React  from 'react'

import { Link } from 'react-router'
function About() {
  return (
    <>
     <div className="bg-white min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-indigo-800">
            About Our Store
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            We’re passionate about providing high-quality, hand-selected products that enhance your lifestyle. From the latest tech gadgets to stylish home decor, our collection is curated with care.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is to deliver value, quality, and an unmatched shopping experience. We believe in customer satisfaction, fast shipping, and reliable service every step of the way.
          </p>
          <Link to="/">
          <button className="border border-indigo-600 text-indigo-600 cursor-pointer py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white">
            Shop Now
          </button>
          </Link> 
        </div>

        <div>
          <img
            src="https://static.startuptalky.com/2020/10/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-biryani-by-kilo--StartupTalky--4--1.jpg"
            alt="Our Store"
            className=" shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-xl  bg-indigo-300 shadow-xl shadow-indigo-500">
            <h3 className="font-bold text-xl mb-2">Quality Products</h3>
            <p className="text-gray-600">
              Every item in our store is hand-picked and tested to ensure the highest standards.
            </p>
          </div>
          <div className="p-6 bg-indigo-300 rounded-xl shadow-xl shadow-indigo-500 ">
            <h3 className="font-bold text-xl mb-2 ">Fast Shipping</h3>
            <p className="text-gray-600">
              We deliver across the country quickly and reliably, right to your doorstep.
            </p>
          </div>
          <div className="p-6 bg-indigo-300 rounded-xl shadow-xl shadow-indigo-500">
            <h3 className="font-bold text-xl mb-2">Customer Support</h3>
            <p className="text-gray-600">
              Our friendly team is here to assist you before, during, and after your purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About