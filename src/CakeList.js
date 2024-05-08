import { Row } from "antd";
import Cake from "./Cake";
import axios from "axios";
import { useEffect, useState } from "react";
import { cakes } from "./Cakes.js";
function CakeList() {
  var [cakes, setCakes] = useState();
  useEffect(() => {
    getCakeList();
  }, []);

  function getCakeList() {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/allcakes",
      method: "get",
    }).then(
      (response) => {
        console.log("Response received", response);
        setCakes(response.data.data);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }
  return (
    <div>
      <Row>
        {cakes?.map((data) => (
          <Cake key={data.cakeid} data={data} />
        ))}
      </Row>
    </div>
  );
}
export default CakeList;
