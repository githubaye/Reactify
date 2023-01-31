import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-6 p-5 m-auto shadow-lg my-5">
          <main className="form-signin  m-auto">
            <form>
              <div className="text-center">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  width="72"
                  height="57"
                />
              </div>
              <h1 className="h3 mb-3 fw-normal">Register</h1>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="First Name"
                />
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Last Name"
                />
                <label htmlFor="lname">Last Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  placeholder="Date Of Birth"
                />
                <label htmlFor="dob">Date of birth</label>
              </div>
              <div className="form-floating">
                <div className="gender form-control d-flex justify-content-evenly">
                  <div className="'gender-member">
                    <input
                      type={"radio"}
                      id="male"
                      name="gender"
                      className="me-2"
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="'gender-member">
                    <input
                      type={"radio"}
                      id="female"
                      name="gender"
                      className="me-2"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div className="'gender-member">
                    <input
                      type={"radio"}
                      id="other"
                      name="gender"
                      className="me-2"
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
                <label>Gender </label>
              </div>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="cfloatingPassword"
                  placeholder=" Confirm Password"
                />
                <label htmlFor="cfloatingPassword">Confirm Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> I accept terms
                  and conditions.
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Register
              </button>
              <span>
                Already have and account? <Link to="/signin">Login</Link>{" "}
              </span>

              <p className="mt-5 mb-3 text-muted text-center">
                &copy; 2017–2022
              </p>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default Register;
