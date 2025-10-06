import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbae from "../Navbae";
import Footer from "../Footer";
import LoadingSpinner from "../Pages/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbae></Navbae>
      {navigation?.state === "loading" ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <main className="min-h-[calc(100vh-285px)]">
          <Outlet></Outlet>
        </main>
      )}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
