import React, { useState } from "react";

const RegisterComp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userInfo);
  };

  return (
    <div className="auth-login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          placeholder="Full Names"
          className="form-control"
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <input
          type="email"
          name=""
          placeholder="Email Address"
          className="form-control"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="password"
          name=""
          placeholder="Password"
          className="form-control"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />

        <input
          type="password"
          name=""
          placeholder="Confirm Password"
          className="form-control"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password2: e.target.value })
          }
        />

        <button className="btn btn-danger btn-sm">Register</button>
      </form>
    </div>
  );
};

export default RegisterComp;
