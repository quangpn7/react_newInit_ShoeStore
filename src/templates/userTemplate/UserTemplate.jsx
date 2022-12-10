import React from "react";
import { Outlet } from "react-router-dom";

const UserTemplate = () => {
  return (
    <div className="d-flex">
      <div className="w-50 " style={{ minHeight: "100vh" }}>
        <img
          style={{ objectFit: "cover" }}
          className="h-100"
          src="https://picsum.photos/1000/2000"
          alt="..."
        />
      </div>
      <div className="w-50">
        <Outlet />
      </div>
    </div>
  );
};

export default UserTemplate;
