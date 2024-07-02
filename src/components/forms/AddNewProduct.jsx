import { Button, Form } from "react-bootstrap";
import { CustomInput, CustomSelect } from "../common/custom-input/CustomInput";

import { useDispatch } from "react-redux";

import { createNewProductAction } from "../../features/products/productAction";
import useForm from "../../Hooks/useForm";

export const AddNewProduct = ({ setShow, options }) => {
  const { form, setForm, handleOnChange } = useForm({});

  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    console.log(form);
    const isSuccess = dispatch(createNewProductAction(form));
    isSuccess && setShow(false);
  };

  const inputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
      placeholder: "Write your Product Name",
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      required: true,
      placeholder: "Write the unique Stock Keeping Units",
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      required: true,
      placeholder: "Enter the price of product",
    },
    {
      label: "Quantity",
      name: "quantity",
      type: "number",
      required: true,
      placeholder: "Enter the quantity of product",
    },
    {
      isSelectType: true,
      label: "Categories",
      name: "category",
      type: "text",
      required: true,
      options: options,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      required: true,
      placeholder: "Enter the Sales Price of product",
    },
    {
      label: "Sales Start",
      name: "salesStart",
      type: "Date",
      required: true,
      placeholder: "Enter the Sales start date of product",
    },
    {
      label: "Sales End",
      name: "salesEnd",
      type: "Date",
      required: true,
      placeholder: "Enter the Sales end date of product",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      required: true,
      placeholder: "Write Some description of the product",
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "text",
      //   required: true,
      placeholder: "Enter the thumbnail of the product",
    },
  ];
  return (
    <div>
      <Form>
        {inputs.map((item, i) =>
          item.isSelectType ? (
            <CustomSelect {...item} key={i} onChange={handleOnChange} />
          ) : (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          )
        )}
        <div className="d-grid mt-3">
          <Button className="btn btn-primary" onClick={handleOnSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
