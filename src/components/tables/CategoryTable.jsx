import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryAction } from "../../features/categories/catAction";
export const CategoryTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryAction());
  }, [dispatch]);
  const { categories } = useSelector((state) => state.category);
  return (
    <div>
      <div>{categories.length} Categories found</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ _id, status, title, slug }, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td>{status}</td>
              <td>{title}</td>
              <td>{slug}</td>
              <td>
                <Button variant="warning">Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
