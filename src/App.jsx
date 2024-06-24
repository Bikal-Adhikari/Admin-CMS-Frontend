import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserVerification from "./pages/user/UserVerification";
import { AdminLayout } from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/verify-user" element={<UserVerification />}></Route>

        {/* private routes  */}
        <Route path="/" element={<AdminLayout />}>
          <Route path="admin/new" element={<Register />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<h1>404 page not found!</h1>}></Route>
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
