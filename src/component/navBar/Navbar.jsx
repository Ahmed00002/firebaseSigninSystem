import { NavLink } from "react-router-dom";
import "../../index.css";

function Navbar() {
  return (
    <>
      <nav className="space-x-4 sidebar">
        <NavLink className="px-5 py-1" to={"/"}>
          Home
        </NavLink>
        <NavLink className="px-5 py-1" to={"/login"}>
          Login
        </NavLink>
        <NavLink className="px-5 py-1" to={"/register"}>
          Register
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
