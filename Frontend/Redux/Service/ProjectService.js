import axios from "axios";

export const getProjectService = async () => { 
    const response = await axios.get(`http://localhost:4000/api/project`)
    return response.data;
}
export const getProjectByID = async (id) => { 
    const response = await axios.get(`http://localhost:4000/api/project/${id}`);
    return response.data;
}