import React from 'react'

function Contact() {
  return (
    <div className="bg-white min-h-screen pt-20 py-4 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
        </p>

        <form className="grid grid-cols-1 gap-4 bg-indigo-200 p-8 rounded-xl shadow-lg">
          <div>
            <label className="block text-sm font-medium text-indigo-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-indigo-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-indigo-700 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button className="border border-indigo-600 text-indigo-600 cursor-pointer py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white">
            Send Message
          </button>
        </form>

        
      </div>
    </div>
  )
}

export default Contact