import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/common/customInput/CustomInput";

import { toast } from "react-toastify";
import { useRef } from "react";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      return toast.error("Must have email and password filled");
    }
    console.log(email, password);
  };
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Write your email",
      forwardRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "**********",
      forwardRef: passwordRef,
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="" style={{ width: "450px" }}>
        <Form
          className="shadow-lg p-3 rounded bg-light"
          onSubmit={handleOnSubmit}
        >
          <h3>Admin Login</h3>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}
          <div className="d-grid mt-3">
            <Button type="submit">Login Admin</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
