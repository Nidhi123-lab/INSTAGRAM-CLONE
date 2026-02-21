import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleClick = async (e) => {
    e.preventDefault();
  
    if (!inputs.username || !inputs.email || !inputs.password || !inputs.name) {
      setErr("All fields are required.");
      return;
    }
  
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      // Check if the error response is an object and has a message field
      if (err.response && err.response.data) {
        const errorMessage = typeof err.response.data === 'string' ? err.response.data : err.response.data.message || 'An error occurred while registering.';
        setErr(errorMessage);
      } else if (err.request) {
        setErr("No response received from the server.");
      } else {
        setErr("An unexpected error occurred.");
      }
    }
  };
  

  return (
    <div className="mt-3">
    <div className="register d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="card p-3 bg-white w-25">
        <div className="left">
          <h1 className="d-flex justify-content-center align-items-center">REGISTER</h1>
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
                type="email"
                placeholder="Email"
                name="email"
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
            <div className="mb-3 d-flex justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
            </div>
            {err && <div className="error">{err}</div>}
            <button className="btn btn-primary w-100" onClick={handleClick}>Register</button>
          </form></div>
      </div>
    </div></div>
  );
};

export default Register;
