import axios from "axios"

export const getAllTeams = async () => { 
    const response = await axios.get("http://localhost:5000/api/team")
    return response.data;
}