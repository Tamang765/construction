import axios from "axios";

export const getFaqService = async () => { 
    const response = await axios.get(`http://localhost:4000/api/faq`);
    return response.data;
}