import HeaderComp from "../components/HeaderComp";

import React, { useState } from "react";
import LoginComp from "../components/LoginComp";
import RegisterComp from "../components/RegisterComp";

const HomePage = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="home">
      <div className="overlay">
        <div className="container">
          <HeaderComp />
          <div className="banner">
            <div className="banner-wrapper">
              <div className="text-content">
                <div className="wrapper">
                  <h1>
                    Introducing <span className="bold">MIE</span> <br />
                    Membership.
                  </h1>
                  <p>
                    Engage with MIE in a whole new way. MIE members earn <br />
                    exclusive access to unforgettable events with big names{" "}
                    <br /> from the MIE Group, inspiring conversations with a
                    global <br /> community, and more.
                  </p>

                  <button className="btn btn-danger">Explore now</button>
                </div>
              </div>
              <div className="auth">
                <div className="wrapper">
                  <nav className="navbar">
                    <ul className="nav">
                      <li className="nav-item">
                        <a
                          href="#0"
                          className={`nav-link ${
                            active === 0 ? "active" : ""
                          } `}
                          onClick={() => setActive(0)}
                        >
                          Sign In
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#0"
                          className={`nav-link ${
                            active === 1 ? "active" : ""
                          } `}
                          onClick={() => setActive(1)}
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {active === 0 ? <LoginComp /> : <RegisterComp />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
