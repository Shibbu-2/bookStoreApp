import React from 'react'

function Contact() {
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-5 md:pl-1 px-4">
         <div className="flex justify-center h-screen items-center mt-12">
          
          <form className="flex flex-col w-md gap-2 border p-8 rounded-md">
           <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
           <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your Name" id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your Email" id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="message">Message</label>
            <textarea type="text" placeholder="Type your message Here" id="message" row="4" 
             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className=" bg-pink-400 w-28 px-3 py-2 border-black rounnded-md hover:bg-pink-700">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
