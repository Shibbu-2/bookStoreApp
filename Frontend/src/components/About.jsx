import React from 'react'

function About() {
  return (
    <>
    <section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-extrabold text-gray-900 mb-4">About Our Bookstore</h2>
    <p class="text-lg text-gray-600 mb-8">
      Welcome to our online bookstore! We are passionate about bringing you a curated collection of books from all genres and authors around the world. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, you'll find them here.
    </p>
    <div class="grid gap-6">
      <div class="p-6 border rounded-lg shadow hover:shadow-md transition">
        <h3 class="text-xl font-semibold text-indigo-600 mb-2">Wide Selection</h3>
        <p class="text-gray-600">
          Thousands of titles across fiction, non-fiction, academic, and children's books.
        </p>
      </div>
      <div class="p-6 border rounded-lg shadow hover:shadow-md transition">
        <h3 class="text-xl font-semibold text-indigo-600 mb-2">Affordable Prices</h3>
        <p class="text-gray-600">
          Great deals and discounts on all your favorite books.
        </p>
      </div>
      <div class="p-6 border rounded-lg shadow hover:shadow-md transition">
        <h3 class="text-xl font-semibold text-indigo-600 mb-2">Customer Support</h3>
        <p class="text-gray-600">
          We're here to help with recommendations and order assistance.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About
