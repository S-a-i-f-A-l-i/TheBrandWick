import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <header>TheBrandWick</header>
      <main>
        <Outlet />
      </main>
      <footer>END</footer>
    </div>
  );
};

export default Layout;
