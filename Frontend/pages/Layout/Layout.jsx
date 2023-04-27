import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import { loaderFunc } from "@/Component/Team/Teams";
import { getAllBlogAsync } from "@/Redux/Slice/BlogSlice";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
