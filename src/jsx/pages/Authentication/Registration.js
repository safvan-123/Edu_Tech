import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import {
  loadingToggleAction,
  signupAction,
} from '../../../store/actions/AuthActions';
// image
//import logo from "../../images/logo-full.png";

function Register(props) {
  const [email, setEmail] = useState('');
  let errorsObj = { email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function onSignUp(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === '') {
      errorObj.email = 'Email is Required';
      error = true;
    }
    if (password === '') {
      errorObj.password = 'Password is Required';
      error = true;
    }
    setErrors(errorObj);
    if (error) return;
    dispatch(loadingToggleAction(true));
    dispatch(signupAction(email, password, props.history));
  }
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
                    {props.errorMessage && (
                      <div className=''>
                        {props.errorMessage}
                      </div>
                    )}
                    {props.successMessage && (
                      <div className=''>
                        {props.successMessage}
                      </div>
                    )}
                    <form onSubmit={onSignUp}>
                      <div className="form-group mb-3">
                        <label className="mb-0 ">
                          <p className="mb-1">Full Name</p>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-0 ">
                          <p className="mb-1">Hotel/Property</p>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Hotel/Property"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="mb-0 ">
                          <p className="mb-1">Email</p>
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="hello@example.com"
                        />
                      </div>
                      {errors.email && <div>{errors.email}</div>}


                      <div className="form-group mb-3">
                        <label className="mb-0 ">
                          <p className="mb-1">Create Password</p>
                        </label>
                        <input
                          value={password}
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                          className="form-control"
                          defaultValue="Create Password"
                        />
                      </div>
                      {errors.password && <div>{errors.password}</div>}

                      <div className="form-group mb-3">
                        <label className="mb-0 ">
                          <p className="mb-1">Confirm Password</p>
                        </label>
                        <input
                          value={password}
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                          className="form-control"
                          defaultValue="Confirm Password"
                        />
                      </div>
                      {errors.password && <div>{errors.password}</div>}

                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Confirm
                        </button>
                      </div>
                    </form>
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

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(Register);

