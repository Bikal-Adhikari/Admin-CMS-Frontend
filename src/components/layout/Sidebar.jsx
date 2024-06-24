import { Stack } from "react-bootstrap";

export const Sidebar = () => {
  return (
    <Stack gap={3}>
      <div className="p-2">Dashboard</div>
      <div className="p-2">Categories</div>
      <div className="p-2">Product</div>
      <div className="p-2">Users</div>
      <div className="p-2">Orders</div>
      <div className="p-2">Reviews</div>

      <div className="p-2">Admins</div>
    </Stack>
  );
};
