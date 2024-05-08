import { Button } from "antd";

export function Meeting() {
  var users = 0;
  function incrUsers() {
    users++;
    // alert(users);
  }
  return (
    <>
      <Button onClick={incrUsers}>Join Meeting</Button>
      <h1>People joined:{users}</h1>
    </>
  );
}
