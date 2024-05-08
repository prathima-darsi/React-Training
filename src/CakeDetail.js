import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Image, Button, Alert } from "antd";
import axios from "axios";

export function CakeDetail() {
  var params = useParams();
  var [cake, setCake] = useState();
  var [itemsAdded, setItemsAdded] = useState(false);

  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/cake/" + params.cakeid,
      method: "get",
    }).then((response) => {
      setCake(response.data.data);
    });
  }, [params.cakeid]);

  function addToCart() {
    var requestJson = {
      name: cake.name,
      cakeid: cake.cakeid,
      price: cake.price,
      image: cake.image,
      weight: 1,
    };
    console.log("token", localStorage.token);
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/addcaketocart",
      method: "post",
      data: requestJson,
      headers: {
        Authorization: localStorage.token,
      },
    }).then((res) => {
      setItemsAdded(true);
    });
  }

  return (
    <>
      {itemsAdded && (
        <Alert message="Added to cart successfully" type="success" />
      )}
      {cake && (
        <Card style={{ width: 250, marginLeft: 40 }}>
          <Image src={cake.image} width={195}></Image>
          <p>{cake.name}</p>
          <p>{cake.price}</p>
          <p>{cake.bestSell}</p>
          <p>
            <Button type="primary" onClick={addToCart}>
              Add to Cart
            </Button>
          </p>
        </Card>
      )}
    </>
  );
}
