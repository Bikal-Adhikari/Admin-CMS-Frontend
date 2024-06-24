import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserVerification from "./pages/user/UserVerification";
import { AdminLayout } from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Categories from "./pages/category/Categories";
import Products from "./pages/product/Products";
import User from "./pages/user/User";
import Reviews from "./pages/review/Reviews";
import Admin from "./pages/user/Admin";
import Profile from "./pages/user/Profile";
import Order from "./pages/order/Order";
import { Auth } from "./components/auth/Auth";

function App() {
  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/verify-user" element={<UserVerification />}></Route>

        {/* private routes  */}
        <Route
          path="/"
          element={
            <Auth>
              <AdminLayout />
            </Auth>
          }
        >
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/categories" element={<Categories />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<User />} />
          <Route path="admin/orders" element={<Order />} />
          <Route path="admin/reviews" element={<Reviews />} />

          <Route path="admin/admins" element={<Admin />} />
          <Route path="admin/new" element={<Register />} />
          <Route path="admin/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<h1>404 page not found!</h1>}></Route>
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
