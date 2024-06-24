import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/common/customInput/CustomInput";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminAction } from "../../features/users/userAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  const redirectTo = "/admin/dashboard";
  useEffect(() => {
    user?._id && navigate(redirectTo);
  }, [user?._id, redirectTo, navigate]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      return toast.error("Must have email and password filled");
    }
    dispatch(loginAdminAction({ email, password }));
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
