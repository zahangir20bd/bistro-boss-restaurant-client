import React from "react";
import authImage from "../../assets/login/authentication2 1.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/xLMw8Xw/login-bg.png)" }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row border-2 border-gray-300 border-b-4 border-r-4 shadow-2xl p-10">
        <div className="text-center lg:text-left w-1/2">
          <img src={authImage} alt="Login Authentication Image" />
        </div>
        <form className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered bg-inherit"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-inherit"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-warning" type="submit" value="Login" />
            </div>
          </div>
          <div>
            <p className="text-center mb-3">
              New to here?{" "}
              <Link to="register" className="text-yellow-600">
                Create New Account
              </Link>
            </p>
            <div className="divider w-1/2 mx-auto">Or Sign in with</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
