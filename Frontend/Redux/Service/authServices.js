import axios from "axios";

export const Backend_URL = process.env.Next_app;

export const Registerservice = async (userdata) => { 
    try {
        const response = await axios.post(`http://localhost:5000/api/register`, userdata, { withCredentials: true })
        return response.data
    } catch (error) {
        console.log(error);   
    }
}
export const LoginUSer = async (userdata) => { 
    try {
        const response = await axios.post(`http://localhost:5000/api/login`, userdata, { withCredentials: true })
        if (response.statusText === "OK") { 
            toast.success("Login successfully")
        }
        return response.data
    } catch (error) {
        console.log(error);   
    }
}
