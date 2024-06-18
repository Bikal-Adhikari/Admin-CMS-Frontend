import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserVerification from "./pages/user/UserVerification";

function App() {
  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/verify-user" element={<UserVerification />}></Route>

        {/* private routes  */}
        <Route path="admin/new" element={<Register />}></Route>
        <Route path="*" element={<h1>404 page not found!</h1>}></Route>
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
