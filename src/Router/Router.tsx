import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Home } from "../pages/Home/Home";
import { Orders } from "../pages/Orders/Orders";
import { Products } from "../pages/Products/Products";
import { Users } from "../pages/Users/Users";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};
