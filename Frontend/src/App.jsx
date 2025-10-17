import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
          <Route path="/" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/UsersList" element={<Users />} />
          <Route path="/CategoryList" element={<Categories />} />
          <Route path="/AddCategory" element={<AddCat />} />
          <Route path="/EditCategory/:id" element={<EditCat />} />
          <Route path="/ProductsList" element={<Products />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct/:id" element={<EditProduct />} />
          <Route path="/Home" element={<UserHome />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
