import React from 'react'
import { Link } from 'react-router'

function Errorpage() {
  return (
    <div className="flex items-center justify-center mt-20 px-6">
      <div className="text-center px-4 py-16 border border-indigo-300 rounded-2xl shadow-2xl shadow-indigo-900">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

export default Errorpage