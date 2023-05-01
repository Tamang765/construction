import Careers from "@/Component/Career/Career"
import { loaderFunc } from "@/Component/Team/Teams";
import { useEffect } from "react";
import { useState } from "react";

const Career = () => {
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
      <div className="career">
          <Careers/>
    </div>
  )
}

export default Career