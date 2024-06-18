import { useEffect, useRef, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { verifyUserLinkAction } from "../../features/users/userAction";

const UserVerification = () => {
  const [searchParams] = useSearchParams();
  const c = searchParams.get("c");
  const e = searchParams.get("e");
  const shouldCall = useRef(true);
  const [resp, setResp] = useState({});
  useEffect(() => {
    // Call API to verify user
    if (shouldCall.current) {
      (async () => {
        const { data } = await verifyUserLinkAction({ c, e });
        setResp(data);
      })();
      shouldCall.current = false;
    }
  }, [c, e]);

  return (
    <div className="d-flex justify-content-center bg-dark align-items-center vh-100">
      <div
        className="bg-light p-3 rounded text-center"
        style={{ width: "450px" }}
      >
        {resp.message ? (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {resp.message}
          </Alert>
        ) : (
          <>
            <Spinner variant="primary" className="fs-1" animation="border" />
            <div>Please wait while we are verifying your link.....</div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserVerification;
