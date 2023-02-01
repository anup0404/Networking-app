import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { user, logout } = useAuth0();
  const [filterData, setFilterData] = useState("");
  const searchUser = (event) => {
    setFilterData(event.target.value);
  };

  return (
    <div className="header_container">
      <div className="header_left">
        <Link to="/">
          <img alt="this is a logo"
            className="header_image"
            src="https://i.pinimg.com/564x/8c/12/6e/8c126e576516e476effb619aa655a572.jpg"
          />
        </Link>
        <div className="search_box">
          <SearchIcon className="search_icon" />
          <input
            type="text"
            placeholder="Search User"
            value={filterData}
            onChange={searchUser}
          />
        </div>
      </div>
      <div className="header_right">
        <Button style={{ border: "none", color: "#000034" }} variant="outlined">
          HI, {user?.name}
        </Button>
        <Link style={{ textDecoration: "none" }} to="/">
          <Button
            style={{ border: "none", color: "#000034" }}
            variant="outlined"
          >
            HOME
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          <Button
            style={{ border: "none", color: "#000034" }}
            variant="outlined"
          >
            ABOUT US
          </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/profile">
          <Button
            style={{ border: "none", color: "#000034" }}
            variant="outlined"
          >
            PROFILE
          </Button>
        </Link>
        <Button style={{ border: "none", color: "#000034" }} variant="outlined">
          DARK MODE
        </Button>
        <Button
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
          style={{ backgroundColor: "#000034", color: "white" }}
          variant="outlined"
        >
          LOGOUT
        </Button>
      </div>
    </div>
  );
}

export default Header;
