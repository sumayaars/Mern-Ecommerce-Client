import { BrowserRouter, Route, Routes } from "react-router";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import DashboardProduct from "./pages/Dashboard/DashboardProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout/Layout";
import AddProduct from "./pages/Dashboard/AddProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "./components/Layout/DashboardLayout";
import Orders from "./pages/Dashboard/Orders";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
            <Route path="orders" element={<Orders/>} />
             <Route path="dashboard-products" element={<DashboardProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
     
    
  )
}
