import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import { loaderFunc } from "@/Component/Team/Teams";
import { getAllBlogAsync } from "@/Redux/Slice/BlogSlice";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [setLoading]);
  if (loading) {
    return loaderFunc();
  }
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
