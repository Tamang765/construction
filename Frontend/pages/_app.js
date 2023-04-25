import "@/styles/globals.css";
import "@/styles/main.scss";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import Aos from "aos";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { Store } from "./../Redux/Store"
import  axios  from "axios";


axios.defaults.withCredentials = true;
export default function App({ Component, pageProps }) {
 useEffect(() => {
  Aos.init();
 }, [])

  return (
    <>
      <ToastContainer />
      <Provider store={Store}>
        
      <Layout>
      <Component {...pageProps} />
        </Layout>
        </Provider>
    </>
    
  );
}
