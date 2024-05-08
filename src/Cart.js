import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Image } from "antd";

export function Cart() {
  var params = useParams();
  var [items, setItems] = useState();

  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/cakecart",
      method: "get",
      headers: {
        Authorization: localStorage.token,
      },
    }).then((response) => {
      console.log("cart", response);
      setItems(response.data.data);
    });
  }, []);

  var keys;
  var columns;
  if (items) {
    const validColumns = ["name", "image", "price", "quantity"];
    keys = validColumns;
    items.forEach((element) => {
      if (keys.length < Object.keys(element).length) {
        keys = Object.keys(element);
      }
    });

    columns = keys
      .filter((each) => validColumns.includes(each))
      .map((each) => ({
        title: each.toLocaleUpperCase(),
        dataIndex: each,
        key: each,
        render: (text, record) =>
          each === "image" ? <Image src={record[each]} width={135} /> : text,
      }));
  }

  return <>{keys && <Table dataSource={items} columns={columns} />}</>;
}
