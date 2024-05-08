import { Input, Button, Layout, Col } from "antd";
import axios, { Axios } from "axios";
import { useState } from "react";

export function SignUp() {
  var email;
  var password;
  var name;
  var [user, setUser] = useState({ email: "", password: "", name: "" });
  function handleEmail(event) {
    console.log("Typing..", event.target.value);
    email = event.target.value;
    user = { ...user, email: email };
  }
  function handleName(event) {
    console.log("Typing..", event.target.value);
    name = event.target.value;
    user = { ...user, name: name };
  }
  function handlePassword(event) {
    console.log("Typing..", event.target.value);
    password = event.target.value;
    user = { ...user, password: password };
  }

  function createAccount() {
    console.log("User details" + name + password + email);
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/register",
      method: "post",
      data: user,
    }).then(
      (response) => {
        console.log("Response", response);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

  return (
    <Layout>
      <Layout style={{ margin: "auto" }}>
        <Col span={12}>
          <h1>Create an account</h1>
          <Input placeholder="Name" onChange={handleName}></Input>
          <Input placeholder="Password" onChange={handlePassword}></Input>
          <Input placeholder="Email" onChange={handleEmail}></Input>
          <Button onClick={createAccount}>Create Account</Button>
        </Col>
      </Layout>
    </Layout>
  );
}
