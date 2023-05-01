import BlogSection from "@/Component/Page/BlogSection/BlogSection"
import { loaderFunc } from "@/Component/Team/Teams";
import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
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
          <BlogSection/>
      </>
  )
}

export default Blog