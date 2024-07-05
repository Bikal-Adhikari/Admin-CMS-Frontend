import { Form } from "react-bootstrap";

export const CustomInput = ({ label, forwardRef, ...rest }) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}

      <Form.Control {...rest} ref={forwardRef} />
    </Form.Group>
  );
};

export const CustomSelect = ({
  label,
  options,
  forwardRef,
  isSelectType,
  ...rest
}) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}

      <Form.Select {...rest} ref={forwardRef}>
        {options?.map(({ value, text }, i) => (
          <option key={i} value={value}>
            {text}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default CustomSelect;
