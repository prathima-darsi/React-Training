import { Input, Layout, Col, Button, Alert } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";

function Login() {
  var nav = useNavigate();
  var [response, setResponse] = useState(null);
  var [error, setError] = useState(null);
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  useEffect(() => {
    setResponse(response);
  }, [response]);
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function loginUser() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/login",
      method: "post",
      data: { email, password },
    }).then(
      (response) => {
        setResponse(response);
        console.log(response);
        localStorage.token = response.data.token;
        console.log(localStorage.token);
      },
      (error) => {
        setError(error);
      }
    );
  }
  if (response) {
    nav("/");
  }
  if (error) {
    setError("Invalid Credentials");
  }
  return (
    <Layout>
      <Layout style={{ margin: "auto" }}>
        <Col span={12}>
          {error && <Alert type="danger" message={error}></Alert>}
          <h1>User Login</h1>
          <Input placeholder="email" onChange={handleEmail}></Input>
          <Input placeholder="Password" onChange={handlePassword}></Input>
          <Link to="/signup">New User? Sign up here</Link>
          <Button onClick={loginUser}>Login</Button>
        </Col>
      </Layout>
    </Layout>
  );
}
export default Login;
