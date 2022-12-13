import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Alert, Spinner } from "reactstrap";
import { registerUser } from "../../../store/actions";

// image
//import logo from "../../images/logo-full.png";

function Register(props) {
  const dispatch = useDispatch();
  const history = useHistory()

  const { registerError, loading } = useSelector(state => ({
    registerError: state.Login.registerError,
    loading: state.Login.loading,
  }))

  const [hadlePassword, sethadlePassword] = useState({
    password1: "",
    password2: "",
    error: ""
  })

  function handleValidSubmit(_, value) {
    if (hadlePassword.password1 === hadlePassword.password2) {
      dispatch(registerUser(value, history))

    } else {
      sethadlePassword({ ...hadlePassword, error: "Password does not match" })
    }
  }

  useEffect(() => {
    if (hadlePassword.password1 === hadlePassword.password2) {
      sethadlePassword({ ...hadlePassword, error: "" })
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hadlePassword.password1, hadlePassword.password2])

  return (
    <div className="authincation h-100 p-meddle ">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content border-r-15">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/login">
                        Logo
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Sign up your account</h4>
                    {registerError && registerError?.username && <Alert color="danger">{registerError?.username[0]}</Alert>}

                    <AvForm
                      className="form-horizontal form-validate"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      <div className="form-group mb-3">
                        <AvField
                          name="username"
                          label="Username"
                          className="form-control"
                          placeholder="Enter username"
                          type="text"
                          required
                        />
                      </div>

                      <div className="form-group mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"

                        />
                      </div>
                      <div className="form-group mb-3">
                        <AvField
                          name="password1"
                          label="Password 1"
                          onChange={(e) => sethadlePassword({ ...hadlePassword, password1: e.target.value })}
                          type={"password"}
                          required
                          placeholder="Enter Password"
                          className="position-relative form-control"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <AvField
                          name="password2"
                          label="Password 2"
                          type={"password"} onChange={(e) => sethadlePassword({ ...hadlePassword, password2: e.target.value })}
                          required
                          placeholder="Enter Password"
                          className="position-relative form-control"
                        />
                      </div>
                      {hadlePassword.error && <Alert color="danger">{hadlePassword.error}</Alert>}

                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Confirm {loading && <Spinner className='mx-2' style={{ height: "20px", width: "20px" }} />}
                        </button>
                      </div>
                    </AvForm>
                    <div className="new-account mt-3">
                      <p className="">
                        Already have an account?{" "}
                        <Link className="text-primary" to="/login">
                          Sign in 
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default (Register);

