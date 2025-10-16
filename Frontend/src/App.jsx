import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHome from "./Components/Admin/AdminHome";
import Categories from "./Components/Admin/Categories";
import AddCat from "./Components/Admin/AddCat";
import EditCat from "./Components/Admin/EditCat";
import Products from "./Components/Admin/Products";
import AddProduct from "./Components/Admin/AddProduct";
import EditProduct from "./Components/Admin/EditProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/CategoryList" element={<Categories />} />
          <Route path="/AddCategory" element={<AddCat />} />
          <Route path="/EditCategory/:id" element={<EditCat />} />
          <Route path="/ProductsList" element={<Products />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct/:id" element={<EditProduct />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
