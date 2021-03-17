import React, { useState } from "react";
import axios from "axios";
const RegisterComp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.password !== userInfo.password2)
      return alert("Passwords do not match");
    try {
      const { data } = await axios.post("http://localhost:8000/users", {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      });
      alert("SUCCESS");
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("FAILED");
    }
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
