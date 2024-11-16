import React, {useContext, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // get the from data 2nd way to get
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({email, password});
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({...error, login: err.code});
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full p-10 max-w-lg shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center ">
          Login Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          {" "}
          Don't Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
