import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const UserVerification = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const c = searchParams.get("c");
    const e = searchParams.get("e");
    // Call API to verify user
  }, [searchParams]);
  return (
    <div className="d-flex justify-content-center bg-dark align-items-center vh-100">
      <div
        className="bg-light p-3 rounded text-center"
        style={{ width: "450px" }}
      >
        <Spinner variant="primary" className="fs-1" />
        <div className="">
          Please wait while we are verifying your link.....
        </div>
      </div>
    </div>
  );
};

export default UserVerification;
