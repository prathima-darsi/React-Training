import { useState } from "react";
import { Input, Layout, Col, Button, Alert } from "antd";

export function Checkout() {
  var [user, setUser] = useState({ name: "", email: "", address: "" });
  function handleName(e) {
    setUser({ ...user, name: e.target.value });
  }
  function handleAddress(e) {
    setUser({ ...user, address: e.target.value });
  }
  return (
    <Layout>
      <Layout style={{ margin: "auto" }}>
        <Col span={12}>
          <h1>Checkout</h1>
          <Input placeholder="Name" onChange={handleName}></Input>
          <Input placeholder="Address" onChange={handleAddress}></Input>
        </Col>
      </Layout>
    </Layout>
  );
}
