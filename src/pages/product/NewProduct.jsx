import { useEffect } from "react";

import { Button, Form } from "react-bootstrap";
import useForm from "../../Hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryAction } from "../../features/categories/catAction";
import { Link } from "react-router-dom";
import { createNewProductAction } from "../../features/products/productAction";
import {
  CustomInput,
  CustomSelect,
} from "../../components/common/custom-input/CustomInput";

const NewProduct = () => {
  const { form, setForm, handleOnChange } = useForm();
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    !categories.length && dispatch(fetchCategoryAction());
  }, [dispatch, categories]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    createNewProductAction(form);
  };

  const options = categories
    .filter((p) => p.status === "active")
    .map(({ title, _id }) => {
      return { text: title, value: _id };
    });

  console.log(options);

  const inputs = [
    {
      label: "Category ",
      name: "parentCatId",
      type: "text",
      required: true,
      isSelectType: true,
      options,
    },
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
      placeholder: "Phones",
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      required: true,
      placeholder: "DJK-H9879",
    },
    {
      label: "Qty",
      name: "qty",
      type: "num",
      min: 1,
      required: true,
      placeholder: "22",
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      min: 1,
      required: true,
      placeholder: "234",
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      min: 1,
      placeholder: "22",
    },
    {
      label: "Sales Start Date",
      name: "salesStart",
      type: "date",
    },
    {
      label: "Sales End Date",
      name: "salesEnd",
      type: "date",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      as: "textarea",
      maxLength: 5000,
      rows: 10,
      required: true,
      placeholder: "Write product details",
    },
  ];

  return (
    <div>
      <h2>Create new product</h2>
      <hr />

      <Link to="/admin/products">
        <Button variant="secondary">&lt; Back</Button>
      </Link>
      <Form onSubmit={handleOnSubmit}>
        {inputs.map((item, i) =>
          item.isSelectType ? (
            <CustomSelect key={i} {...item} onChange={handleOnChange} />
          ) : (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          )
        )}

        <Form.Group>
          <Form.Label>Upload Images</Form.Label>

          <Form.Control
            type="file"
            name="images"
            required={true}
            accept="image/jpg, image/png, image/gif"
            multiple
          />
        </Form.Group>

        <div className="d-grid mt-3">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewProduct;
