import React from "react";

export const Header1 = ({ header_1, paragraph_1 }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 50,
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <img style={{ height: "500px", width: "450px" }} />
        <div
          style={{
            height: "500px",
            width: "500px",
            color: "gray",
            textAlign: "left",
            padding: "10px 30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1> {header_1} </h1>
            <p>{paragraph_1}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Header2 = ({ header_1, paragraph_1 }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 50,
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <div
          style={{
            height: "500px",
            width: "500px",
            color: "gray",
            textAlign: "left",
            padding: "10px 30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1> {header_1} </h1>
            <p>{paragraph_1}</p>
          </div>
        </div>
        <img style={{ height: "500px", width: "450px" }} />
      </div>
    </>
  );
};
