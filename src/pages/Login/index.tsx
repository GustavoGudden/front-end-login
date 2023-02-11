import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../componets/Button";
import api from "../../services/axios/axios";

import { BoxWrapper } from "./style";

function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:3000/auth/user", {
        email: "gstvgudden@gmail.com",
        password: "senha321",
      })
      .then(function (response) {
        console.log(response);
        setToken(response.data.token);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(token);

  return (
    <BoxWrapper>
      <img src="https://i.ibb.co/NS8XWZ5/image-1.png" alt="image-1" />

      <div>
        <h2>Welcome back</h2>
        <h1>Login to your account</h1>
        <p>Email</p>
        <input type="text" />
        <p>Password</p>
        <input type="password" />

        <Button event={handleLogin} text="Login Now" color="#04C45C" />
        <Button text="Or sign-in with google" color=" #2D3748" />

        <h1 className="HelperLink">
          need help <a>click here</a>
        </h1>
      </div>
    </BoxWrapper>
  );
}

export default Login;
