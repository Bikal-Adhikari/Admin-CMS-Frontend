import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import { forwardRef, useRef } from "react";

export const AddNewCategory = () => {
  const titleRef = useRef("");

  const handleOnSubmit = () => {
    const value = titleRef.current.value;
    console.log(value);
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
      <Form onSubmit={handleOnSubmit}>
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}
        <div className="d-grid mt-3">
          <Button className="btn btn-primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
