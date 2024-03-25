
import "../assets/css/babyStyle.css"
import biblio from "../assets/img/biblio.jpg"
import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, errors } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <div
        className="container w-75 position-absolute top-50 start-50 translate-middle bg-dark text-white p-5 rounded"
        data-bs-theme="dark"
      >
        <div className="row">
          <div className="col-4">
            <img src={biblio} className="rounded" alt="" />
          </div>
          <div className="col-8">
            <h2 className="text-center mb-5">Login</h2>
            <form
              className="w-75 position-relative top-0 start-50 translate-middle-x"
              onSubmit={handleLogin}
            >
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div id="emailHelp" className="form-text text-danger">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="password1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div id="password1" className="form-text text-danger">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  name="check"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
