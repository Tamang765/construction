import Gallery from '@/Component/Gallery/Gallery'
import React from 'react'

const gallery = () => {
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
      <Gallery/>
    </>
  )
}

export default gallery