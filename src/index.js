import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./assets/scss/style.scss";
import Carts from "./pages/carts/Carts";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import HomeTemplate from "./templates/homeTemplate/HomeTemplate";
import UserTemplate from "./templates/userTemplate/UserTemplate";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Carts />} />
        <Route path="detail" element={<Detail />} />
        <Route path="*" element={<Navigate to="" />} />
      </Route>
      <Route path="users" element={<UserTemplate />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="" element={<Navigate to="/users" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
