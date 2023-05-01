import Contact from "@/Component/Contact/Contact"
import { loaderFunc } from "@/Component/Team/Teams";
import { useEffect } from "react";
import { useState } from "react";

const contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [setLoading]);
  if (loading) {
    return loaderFunc();
  }
  return (
      <>
          <Contact/>
      </>
  )
}

export default contact