import { AvField, AvForm } from 'availity-reactstrap-validation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { Alert, Spinner, } from 'reactstrap';


// image
import loginbg from "../../../images/pic1.png";
import { loginUser } from '../../../store/actions';

function Login() {
	const history = useHistory()
	const [toggleShow, setToggleShow] = useState(false)

	const { error, loading } = useSelector(state => ({
		error: state.Login.error,
		loading: state.Login.loading,
	}))

	const dispatch = useDispatch();

	function handleValidSubmit(_, value) {
		dispatch(loginUser(value, history))
	}

	return (
		<div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
			<div className="login-aside text-center  d-flex flex-column flex-row-auto">
				<div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
					<div className="text-center mb-4 pt-5">
						<h4> Logo</h4>
					</div>
					<h3 className="mb-2">Welcome back!</h3>
					<p>User Experience & Interface Design <br />Strategy SaaS Solutions</p>
				</div>
				<div className="aside-image" style={{ backgroundImage: "url(" + loginbg + ")" }}></div>
			</div>
			<div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
				<div className="d-flex justify-content-center h-100 align-items-center">
					<div className="authincation-content style-2">
						<div className="row no-gutters">
							<div className="col-xl-12 tab-content">
								<div id="sign-in" className="auth-form   form-validation">

									<AvForm
										className="form-horizontal form-validate"
										onValidSubmit={(e, v) => {
											handleValidSubmit(e, v)
										}}
									>
										<h3 className="text-center mb-4 text-black">Sign in your account</h3>
										{error && <Alert color="danger">{error}</Alert>}
										<div className="form-group mb-3">
											<div>
												<AvField
													name="username"
													label="Username"
													className="form-control"
													placeholder="Enter username"
													type="text"
													required
													value="booking-admin"
												/>
											</div>
										</div>
										<div className="form-group mb-3">
											<AvField
												name="password"
												label="Password"
												type={`${toggleShow === true ? "text" : "password"
													}`}
												required
												placeholder="Enter Password"
												className="position-relative form-control"
												value="bk-admin"
											/>
										</div>
										<div className="form-row d-flex justify-content-between mt-4 mb-2">
											<div className="form-group mb-3">
												<div className="custom-control custom-checkbox ml-1">
													<input
														onClick={() => setToggleShow(!toggleShow)}
														type="checkbox" className="form-check-input" id="basic_checkbox_1" />
													<label className="form-check-label" htmlFor="basic_checkbox_1">Show password</label>
												</div>
											</div>
										</div>
										<div className="text-center form-group mb-3">
											<button type="submit" className="btn btn-primary btn-block">
												Sign In {loading && <Spinner className='mx-2' style={{ height: "20px", width: "20px" }} />}
											</button>
										</div>
									</AvForm>

									<div className="new-account mt-3">
										<p>Don't have an account? <Link className="text-primary" to="./page-register">Sign up</Link></p>
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


export default (Login);
