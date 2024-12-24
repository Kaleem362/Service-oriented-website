import React from "react";
import { MdHeight } from "react-icons/md";

function ErrorPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#000b1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="text-center text-white" style={{ fontSize: "120px" }}>
        {" "}
        Error 404 : Page Not Found
      </h1>
    </div>
  );
}

export default ErrorPage;
