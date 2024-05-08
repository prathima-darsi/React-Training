import { useParams } from "react-router-dom";
import { users } from "./data";
import { Layout, Col, Input, Button } from "antd";
import { useState } from "react";

export function EditUser() {
  var params = useParams();
  var userId = params.userId;

  var user = users.filter((each) => {
    console.log(".qa ", each.id, "....", userId);
    if (each.id == Number.parseInt(userId)) {
      console.log("...", each.id);
      return true;
    }
  })[0];
  var [userData, setUserData] = useState(user);

  const handleInputChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };
  //   var keys = Object.keys(user);
  return (
    <>
      {/*{keys.map((each) => (
        <li>
          {each}:{user[each]}
        </li>
      ))}*/}
      <Layout>
        <Layout style={{ margin: "auto" }}>
          <Col span={8}>
            <h1>Edit User Details</h1>
            {/* id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 30,
    occupation: "Software Engineer",
    city: "New York", */}
            <Input
              placeholder="Name"
              value={user.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            ></Input>
            <Input placeholder="Email" value={user.email}></Input>
            <Input placeholder="Age" value={user.age}></Input>
            <Input placeholder="Occupation" value={user.occupation}></Input>
            <Input placeholder="City" value={user.city}></Input>
            <Button type="primary">Login</Button>
          </Col>
        </Layout>
      </Layout>
    </>
  );
}
