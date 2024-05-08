import { Menu, Input } from "antd";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

function NavBar() {
  var nav = useNavigate();
  var searchText;
  function search() {
    var url = "/search?q=" + searchText;
    nav(url);
  }
  function handleSearchText(e) {
    searchText = e.target.value;
  }
  const items = [
    { label: <Link to="/">Cake gallery</Link> },
    { label: <Link to="/">Home</Link> },
    { label: "About Us" },
    { label: "Contact Us" },
    {
      label: (
        <Link to="/login">
          <Button type="primary">Login</Button>
        </Link>
      ),
    },
    {
      icon: (
        <div>
          <Input placeholder="Search" onChange={handleSearchText}></Input>
          <SearchOutlined onClick={search}></SearchOutlined>
        </div>
      ),
    },
    {
      label: (
        <Link to="/cart">
          <Button type="primary">Cart</Button>
        </Link>
      ),
    },
    {
      label: (
        <Link to="/checkout">
          <Button type="primary">Checkout</Button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <Menu theme="dark" mode="horizontal" items={items} />
    </div>
  );
}
export default NavBar;
