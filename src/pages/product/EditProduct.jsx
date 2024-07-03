import { Button, Form } from "react-bootstrap";
import useForm from "../../Hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import {
  editProductAction,
  getOneProductAction,
} from "../../features/products/productAction";
import {
  CustomInput,
  CustomSelect,
} from "../../components/common/custom-input/CustomInput";
import { useEffect } from "react";
import { fetchCategoryAction } from "../../features/categories/catAction";

const EditProduct = () => {
  const { _id } = useParams();
  const { form, setForm, handleOnChange } = useForm();

  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    !categories.length && dispatch(fetchCategoryAction());
  }, [dispatch, categories]);

  useEffect(() => {
    if (_id) {
      const response = getOneProductAction(_id);
      setForm(response.product);
      console.log(response.product);
    }
  }, [setForm, _id]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(editProductAction(form));
  };
  console.log(form);
  const inputs = [
    {
      isSelectType: true,
      label: "Status",
      name: "status",
      type: "text",
      required: true,
      value: form.status,
      options: [
        { label: "-- Select --", value: "" },
        {
          value: "active",
          label: "Active",
          selected: form.status === "active",
        },
        {
          value: "inactive",
          label: "Inactive",
          selected: form.status === "inactive",
        },
      ],
    },
    {
      label: "Category ",
      name: "parentCatId",
      type: "text",
      required: true,
      isSelectType: true,
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
      disabled: true,
    },
    {
      label: "Slug",
      name: "slug",
      type: "text",
      required: true,
      placeholder: "",
      disabled: true,
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
            <CustomSelect
              key={i}
              {...item}
              onChange={handleOnChange}
              value={form[item.name]}
            />
          ) : (
            <CustomInput
              key={i}
              {...item}
              onChange={handleOnChange}
              value={form[item.name]}
            />
          )
        )}

        <Form.Group>
          <Form.Label>Upload Images</Form.Label>

          <Form.Control type="file" multiple />
        </Form.Group>

        <div className="d-grid mt-3">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default EditProduct;
