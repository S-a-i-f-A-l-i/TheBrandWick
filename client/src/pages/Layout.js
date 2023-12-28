import React from "react";
import { Outlet } from "react-router-dom";
// import { Navbar, SmallSidebar, BigSidebar } from "../../components";

const Layout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
