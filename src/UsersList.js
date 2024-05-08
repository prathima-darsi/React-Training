import { Alert, Card, Image, Row } from "antd";
import { DataTable } from "./DataTable";

export function UsersList() {
  var users = [
    { name: "Dev1", role: "Developer" },
    { name: "Dev2", role: "Developer", location: "Gnt", email: "123" },
    { name: "Dev2", role: "Developer", location: "Gnt" },
  ];

  if (users.length == 0) {
    return <Alert message="No users available" type="warning" />;
  } else {
    return (
      <div>
        <h1>All users</h1>
        <DataTable data={users}></DataTable>
        {/*
        <Row>
          {users.map((each) => {
            var keys = Object.keys(each);
            return (
              <Card style={{ width: 250 }}>
                <Image src="usericon.png" height={150}></Image>
                {keys.map((eachkey) => {
                  return <p>{each[eachkey]}</p>;
                })}
              </Card>
            );
          })}
        </Row>
        */}
      </div>
    );
  }
}
