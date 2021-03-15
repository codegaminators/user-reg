import React from "react";

const LoginComp = () => {
  return (
    <div className="auth-login">
      <form>
        <input
          type="email"
          name=""
          placeholder="Email Address"
          className="form-control"
        />
        <input
          type="password"
          name=""
          placeholder="Password"
          className="form-control"
        />

        <div className="d-flex justify-between">
          <div className="">
            <input type="checkbox" name="" id="" />
            <span className="text-black"> Remember Me</span>
          </div>
          <a href="#" className="text-black">
            Forgot Password ?
          </a>
        </div>

        <button className="btn btn-success btn-sm">Login</button>
      </form>
    </div>
  );
};

export default LoginComp;
