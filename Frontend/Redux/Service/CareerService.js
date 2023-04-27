import axios from "axios"

export const getAllCareerService = async () => { 
    const response = await axios.get(`http://localhost:4000/api/career`);
    return response.data;
}