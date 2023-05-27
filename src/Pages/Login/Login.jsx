import React, { useEffect, useRef, useState } from "react";
import authImage from "../../assets/login/authentication2 1.png";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/xLMw8Xw/login-bg.png)" }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row border-2 border-gray-300 border-b-4 border-r-4 shadow-2xl p-10">
        <div className="text-center lg:text-left w-1/2">
          <img src={authImage} alt="Login Authentication Image" />
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl"
        >
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
            </div>
            <div className="form-control">
              <span className="my-2">
                <LoadCanvasTemplate />
              </span>
              <label className="label">
                <span className="label-text">Captcha</span>
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="Type the above text"
                ref={captchaRef}
                className="input input-bordered bg-inherit"
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-3"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-warning"
                type="submit"
                value="Login"
              />
            </div>
          </div>
          <div>
            <p className="text-center mb-3">
              New to here?{" "}
              <Link to="/register" className="text-yellow-600">
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

export default Login;
