import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";

const HomeTemplate = () => {
  return (
    <>
      <HeaderHome />

      <div className="content" style={{ minHeight: "85vh" }}>
        <Outlet />
      </div>
      <footer className="bg-dark p-2 text-center display-6 text-light">
        Footer
      </footer>
    </>
  );
};

export default HomeTemplate;
