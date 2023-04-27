import axios from "axios";

export const getProjectService = async () => { 
    const response = await axios.get(`http://localhost:4000/api/project`)
    return response.data;
}