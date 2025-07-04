import React from 'react'

function Orders() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
  <h2 className="text-2xl font-semibold mb-4 text-center">Orders List</h2>

  <div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">#</th>
          <th className="border px-4 py-2">Customer</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Items</th>
          <th className="border px-4 py-2">Total</th>
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">aaresha</td>
          <td className="border px-4 py-2">aaresha@gmail.com</td>
          <td className="border px-4 py-2">
            <div>Product A × 2</div>
            <div>Product B × 1</div>
          </td>
          <td className="border px-4 py-2">$120.00</td>
          <td className="border px-4 py-2">
            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm">
              Pending
            </span>
          </td>
          <td className="border px-4 py-2">2025-07-01</td>
        </tr>
        <tr className="text-center">
          <td className="border px-4 py-2">2</td>
          <td className="border px-4 py-2">Sumaya</td>
          <td className="border px-4 py-2">suma@.com</td>
          <td className="border px-4 py-2">
            <div>Product C × 1</div>
          </td>
          <td className="border px-4 py-2">$89.99</td>
          <td className="border px-4 py-2">
            <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">
              Delivered
            </span>
          </td>
          <td className="border px-4 py-2">2025-06-30</td>
        </tr>
      </tbody>
    </table>
  </div>
 </div>

    </div>
  )
}

export default Orders
