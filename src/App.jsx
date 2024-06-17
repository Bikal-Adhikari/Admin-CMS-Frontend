import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

function App() {
  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Login />}></Route>

        {/* private routes  */}
        <Route path="admin/new" element={<Register />}></Route>
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
