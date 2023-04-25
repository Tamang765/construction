import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
