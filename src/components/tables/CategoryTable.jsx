import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export const CategoryTable = () => {
  return (
    <div>
      <div>5 Categories found</div>
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
          <tr>
            <td>1</td>
            <td>Active</td>
            <td>Phones</td>
            <td>phone</td>
            <td>
              <Button variant="warning">Edit</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
