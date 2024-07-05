import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import useForm from "../../Hooks/useForm";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import {
  editUserProfileAction,
  fetchUserProfileAction,
} from "../../features/users/userAction";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const { user } = useSelector((state) => state.userInfo);
  const { form, handleOnChange, setForm } = useForm({ user });
  useEffect(() => {
    if (_id !== form?._id) {
      dispatch(fetchUserProfileAction());
      user?._id && setForm(user);
    }
  }, [dispatch, _id, user, setForm, form]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, createdAt, updatedAt, role, email, ...rest } = form;

    if (window.confirm("Are you sure you want to make this changes?")) {
      dispatch(editUserProfileAction(rest));
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Write your first name",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Write your Last name",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      required: false,
      placeholder: "041345678",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
      disabled: true,
    },
    {
      label: "Gender",
      name: "gender",
      type: "text",
      required: true,
      placeholder: "Gender",
      disabled: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "Enter your current password",
    },
  ];

  return (
    <div className="mt-5">
      {/* form here  */}

      <h4 className="py-4">Profile Update</h4>
      <Link to="/admin/profile">
        <Button variant="secondary">&lt; Back</Button>
      </Link>
      <Form onSubmit={handleOnSubmit}>
        {inputs?.map((input, i) => (
          <CustomInput
            key={i}
            {...input}
            onChange={handleOnChange}
            value={form[input.name]}
          />
        ))}

        <div className="d-grid mt-3">
          <Button type="submit">Update your Profile</Button>
        </div>
      </Form>
    </div>
  );
};

export default EditProfile;
