import { Button, Table } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export function DataTable(props) {
  var navigate = useNavigate();
  function editUser(index) {
    navigate("/edit/search?q=" + (index + 1));
  }

  var tableData = props.data;
  // .map((element) => ({
  //   ...element,
  //   action: <Button type="primary">Edit</Button>,
  // }));

  var keys = Object.keys(tableData[0]);
  tableData.forEach((element) => {
    if (keys.length < Object.keys(element).length) {
      keys = Object.keys(element);
    }
  });

  var columns = keys.map((each) => ({
    title: each.toLocaleUpperCase(),
    dataIndex: each,
    key: each,
  }));

  columns.push({
    title: "Action",
    render: (text, record, index) => {
      return (
        <Button onClick={editUser.bind(null, index)} type="primary">
          <EditFilled></EditFilled>
        </Button>
      );
    },
  });

  return (
    <>
      <Table dataSource={tableData} columns={columns} />
    </>
  );
}
