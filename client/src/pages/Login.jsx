import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login",{ email, password });
      if (res.data.message === "Login successful") {
        localStorage.setItem("user",JSON.stringify(res.data));
        alert("login successful");
        navigate("/");
      } else {
        alert(res.data || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("something went worng");
    }
  };
  return (
            <div className='container mt-5'style ={{maxWidth: "500px"}}>
            <h2 className='text-center mb-4'> Login</h2>    
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label> Email address</label>
                    <input 
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value = {email}
                    onChange= {(e) => setEmail(e.target.value)}
                    required
                    />
                </div>

                <div className='mb-3'>
                    <label>Password</label>
                    <input 
                    type="password"
                    className="form-control" 
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>

            </div>
  );
}

export default Login;