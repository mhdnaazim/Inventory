import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHome from "./Components/Admin/AdminHome";
import Categories from "./Components/Admin/Categories";
import AddCat from "./Components/Admin/AddCat";
import EditCat from "./Components/Admin/EditCat";
import Products from "./Components/Admin/Products";
import AddProduct from "./Components/Admin/AddProduct";
import EditProduct from "./Components/Admin/EditProduct";
import SignUp from "./Components/User/SignUp";
import Login from "./Components/User/Login";
import Users from "./Components/Admin/Users";
import UserHome from "./Components/User/UserHome";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* User Routes  */}
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />

        {/* Admin Routes  */}
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/userslist" element={<Users />} />
        <Route path="/categorylist" element={<Categories />} />
        <Route path="/addcategory" element={<AddCat />} />
        <Route path="/editcategory/:id" element={<EditCat />} />
        <Route path="/productslist" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1700}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </BrowserRouter>
    </>
  )
}

export default App;
