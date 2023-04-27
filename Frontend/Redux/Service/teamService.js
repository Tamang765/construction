import axios from "axios"

export const getAllTeams = async () => { 
    const response = await axios.get(`http://localhost:4000/api/team`)
    return response.data;
}