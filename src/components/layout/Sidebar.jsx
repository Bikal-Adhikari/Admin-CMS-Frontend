import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdCategory,
  MdProductionQuantityLimits,
  MdReviews,
  MdAdminPanelSettings,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";

export const Sidebar = () => {
  return (
    <Stack gap={1}>
      <div className="p-2">
        <Link className="nav-link" to="/admin/dashboard">
          <MdDashboard />
          Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/categories">
          <MdCategory /> Categories
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/products">
          <MdProductionQuantityLimits />
          Products
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/users">
          <FaUserCircle /> Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/orders">
          <BiPurchaseTag /> Orders
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/reviews">
          <MdReviews />
          Reviews
        </Link>
      </div>
      <hr />
      <div className="p-2">
        <Link className="nav-link" to="/admin/admins">
          <MdAdminPanelSettings /> Admins
        </Link>
      </div>
    </Stack>
  );
};
