import axios from "axios"

export const getAllServices =async () => { 
    const response = await axios.get(`http://localhost:4000/api/service`);
    return response.data;
}