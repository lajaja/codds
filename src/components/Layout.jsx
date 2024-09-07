import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header.jsx";
const Layout = () => {

  return (
    <>
      <main className="container min-h-screen mx-auto flex items-center bg-white flex-col drop-shadow-lg rounded-3xl my-5">
        <Header />

        <Outlet />
      </main>
    </>
  );
};

export default Layout;
