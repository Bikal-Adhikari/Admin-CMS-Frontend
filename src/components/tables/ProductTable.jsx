import { Button, Form, Pagination, Table } from "react-bootstrap";

export const ProductTable = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <div className="d-flex justify-content-between my-4 align-items-center">
        <div>30 Products Found</div>
        <div>
          <Form.control />
        </div>
      </div>
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
                <Button
                  variant="warning"
                  onClick={() => handleEdit({ _id, status, title, slug })}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(_id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>{items}</Pagination>
      <br />

      <Pagination size="lg">{items}</Pagination>
      <br />

      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};
