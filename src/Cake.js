import { Badge, Button, Card, Image, Tag } from "antd";
import { Link, useNavigate } from "react-router-dom";

function Cake(props) {
  // var data = { name: "Chocolate Truffle", price: 650, image: "Truffle.jpg" };
  // var nav = useNavigate();
  // function getDetail(id) {
  //   console.log("..." + id);
  //   nav("/detail/$" + { id });
  // }
  var Component;
  if (props.data.bestSell) {
    Component = (
      <Badge.Ribbon text="Best Seller" color="green">
        <Card style={{ width: 250, marginLeft: 40 }}>
          <Image src={props.data.image} width={195}></Image>
          <p>{props.data.name}</p>
          <p>{props.data.price}</p>
          <p>{props.data.bestSell}</p>
        </Card>
      </Badge.Ribbon>
    );
  } else {
    Component = (
      <Card style={{ width: 250, marginLeft: 40 }}>
        <Image src={props.data.image} width={195}></Image>
        <p>{props.data.name}</p>
        <p>{props.data.price}</p>
        <p>{props.data.bestSell}</p>
        <p>
          <Link to={"/detail/" + props.data.cakeid}>
            <Button>Details</Button>
          </Link>
        </p>
      </Card>
    );
  }
  return Component;
}
export default Cake;
