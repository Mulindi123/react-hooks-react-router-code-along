import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  /* define the NavBar component */
  function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          style={linkStyles}
          /* add prop for activeStyle */
          activestyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={linkStyles}
          activestyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          style={linkStyles}
          activestyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      </div>
    );
  }
  export default NavBar