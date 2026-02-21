import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login d-flex vh-100 justify-content-center align-items-center bg-primary register">
      <div className="card p-3 bg-white w-25 card">
        <div className="left">
          <h1 className="d-flex justify-content-center align-items-center">LOGIN.</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center right">
          <form>
            <div className="mb-3 d-flex justify-content-center align-items-center">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            </div>
            {err && err}
            <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
            <div className="mb-3">
            <span>Don't you have an account?</span>
            </div>
            <div className="mb-3" >
            <Link to="/register">
            <button className="btn btn-primary w-100">Register</button>
          </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;