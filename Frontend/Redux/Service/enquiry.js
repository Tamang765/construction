import axios from "axios";
export const postEnquiry = async (enquiryData) => { 
    const response = await axios.post(`http://localhost:4000/api/contact`, enquiryData, {withCredentials:true});
    return response.data;
}