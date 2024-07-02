import { Button } from "react-bootstrap";
import { CustomModal } from "../../components/common/custom-modal/CustomModal";
import { AddNewProduct } from "../../components/forms/AddNewProduct";
import { useCustomModal } from "../../Hooks/useCustomModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryAction } from "../../features/categories/catAction";
import { ProductTable } from "../../components/tables/ProductTable";
import { Link } from "react-router-dom";

const Products = () => {
  // const { show, setShow } = useCustomModal();
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCategoryAction());
  // }, [dispatch]);
  // const { categories } = useSelector((state) => state.category);

  // const categoryTitle = categories.filter(({ title, status, ...rest }) => {
  //   if (status === "active") {
  //     return title;
  //   }
  // });
  // const options = [
  //   { label: "-- Select Categories --", value: "" },
  //   ...categoryTitle.map(({ title }) => ({
  //     label: title,
  //     value: title,
  //   })),
  // ];

  return (
    <div>
      <h2>Products</h2>
      <hr />
      <div className="text-end">
        <Link to="/admin/products/new">
          <Button className="btn btn-primary">Add New Product</Button>
        </Link>
      </div>
      {/* <CustomModal title="Add New Product" show={show} setShow={setShow}>
        <AddNewProduct setShow={setShow} options={options} />
      </CustomModal> */}
      <ProductTable />
    </div>
  );
};

export default Products;
