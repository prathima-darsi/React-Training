import "./App.css";
import NavBar from "./NavBar.js";
import Login from "./Login.js";
import { Button } from "antd";
import CakeList from "./CakeList.js";
import { UsersList } from "./UsersList.js";
import { SignUp } from "./SignUp.js";
import { Meeting } from "./Meeting.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import { Admin } from "./Admin.js";
import { EditUser } from "./EditUser.js";
import { CakeDetail } from "./CakeDetail.js";
import { Search } from "./Search.js";
import { Cart } from "./Cart.js";
import { Checkout } from "./Checkout.js";
import { PageNotFound } from "./PageNotFound.js";

function App() {
  var name = "PD";
  var money = 12;
  // return <A data={money}></A>;
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<CakeList></CakeList>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
          <Route
            path="/detail/:cakeid"
            element={<CakeDetail></CakeDetail>}
          ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/edit/:userId" element={<EditUser></EditUser>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Meeting></Meeting>
      <SignUp></SignUp>
      <UsersList />
      <NavBar />
      <CakeList></CakeList>
      <Login />
      <Button type="primary">Demo Btn</Button>
  <label>{name}</label> */}
    </div>
  );
}

export default App;
