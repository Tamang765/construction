import axios from "axios"

export const getAllTestimonialService = async () => { 
    const response = await axios.get(`http://localhost:4000/api/testimonial`);
    return response.data;
}