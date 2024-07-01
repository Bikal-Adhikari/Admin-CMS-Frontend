import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createNewCategoryAction } from "../../features/categories/catAction";

export const AddNewCategory = () => {
  const titleRef = useRef("");
  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    const title = titleRef.current.value;
    if (!title) {
      return alert("Must fill up the form first");
    }
    dispatch(createNewCategoryAction({ title }));
  };
  const inputs = [
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      placeholder: "Phones",
      forwardRef: titleRef,
    },
  ];
  return (
    <div>
      <Form>
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}
        <div className="d-grid mt-3">
          <Button className="btn btn-primary" onClick={handleOnSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
