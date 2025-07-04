import React from "react";
import { useAuth } from "../hooks/auth";
import { NavLink } from "react-router";
const Sidebar = () => {
   const {user} =useAuth();
  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      {/* <a href="#" className="mx-auto">
        <img
          className="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt=""
        />
      </a> */}

      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src={user?.photoURL}
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
        {user?.displayName}
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          {user?.email}
        </p>
      </div>

      <div className="flex flex-col justify-center flex-1 mt-6">
        <nav>
          <a
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
            href="#"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="mx-4 font-medium">Dashboard</span>
          </a>

          <NavLink
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to='/dashboard/add-product'
          >
            <img
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              src="https://cdn-icons-png.flaticon.com/128/9280/9280764.png"
          
              
            />

            <span className="mx-4 font-medium">Add products</span>
          </NavLink>
        

          <NavLink
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to="/dashboard/orders"
          >
            <img
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              src="https://cdn-icons-png.flaticon.com/128/2435/2435281.png"
            />
             

            <span className="mx-4 font-medium">Orders</span>
          </NavLink>

          <NavLink
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to='/dashboard/dashboard-products'
          >
            <img
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              src="https://cdn-icons-png.flaticon.com/128/2875/2875986.png"
            />
             

            <span className="mx-4 font-medium">All Products</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;