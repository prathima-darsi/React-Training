import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Alert } from "antd";
import axios from "axios";

export function Search() {
  var [params, setParams] = useSearchParams();
  var nav = useNavigate();
  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/allcakes",
      method: "get",
    }).then(
      (response) => {
        console.log(response);
        var cakeId = response.data.data
          .filter(
            (each) =>
              each.name.toLocaleLowerCase() ==
              params.get("q").toLocaleLowerCase()
          )
          .map((each) => each.cakeid);
        console.log("cakeid", cakeId);
        cakeId != 0 && nav("/detail/" + cakeId);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [params]);

  return (
    <>
      <p>No Results"</p>
    </>
  );
}
