import React from "react";
import { Outlet } from "react-router";
import Navbae from "../Navbae";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbae></Navbae>
      <main className="min-h-[calc(100vh-285px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
