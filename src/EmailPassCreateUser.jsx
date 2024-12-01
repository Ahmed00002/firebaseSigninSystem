import Navbar from "./component/navBar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";

function EmailPassCreateUser() {
  return (
    <div className="space-y-6">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default EmailPassCreateUser;
