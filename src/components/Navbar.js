import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export const Navbar = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: 85,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: 50,
          position: "fixed",
          backgroundColor: "white",
          top: 0,
        }}
      >
        <div>
          <img style={{ width: 115, height: 65 }} />
        </div>
        <div style={{ display: "flex", gap: 45, marginRight: 100 }}>
          <Link to={"/"} className="Link">
            Home
          </Link>
          <Link to={"/"} className="Link">
            Services
          </Link>
          <Link to={"/"} className="Link">
            Packages
          </Link>
          <Link to={"/"} className="Link">
            Tech
          </Link>
          <Link to={"/"} className="Link">
            Networking
          </Link>
          <Link to={"/"} className="Link">
            nerdtech12345@gmail.com
          </Link>
          <button
            style={{
              padding: "7px 30px",
              fontSize: 15,
              color: "white",
              backgroundColor: "green",
              borderRadius: 10,
              border: "none",
            }}
          >
            Free Quote
          </button>
        </div>
      </div>
    </>
  );
};
