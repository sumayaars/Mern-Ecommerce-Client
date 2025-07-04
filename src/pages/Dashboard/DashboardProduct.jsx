import React from 'react'

export default function DashboardProduct() {
  return (
    <div>
    <div className="max-w-7xl mx-auto px-4 py-8">
  <h2 className="text-3xl font-semibold text-center mb-6">All Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  
    <div className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-300">
      <img
        src="../src/assets/product.png"
        alt="Product Name"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Product Name</h3>
        <p className="text-gray-600 text-sm mb-2">Category: Electronics</p>
        <p className="text-gray-800 font-bold text-lg mb-2">$49.99</p>
        <p className="text-gray-500 text-sm mb-3">Stock: 10 items</p>
        <button className="w-full bg-blue-100 text-black hover:text-white py-2 rounded hover:bg-blue-900 transition">
          View Details
        </button>
      </div>
    </div>

  </div>
 
</div>
  
    </div>
  )
}
