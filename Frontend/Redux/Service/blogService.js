import axios from "axios";

export const Backend_URL = process.env.Next_app;

export const getAllBlogs = async () => {
    const response = await axios.get(`http://localhost:4000/api/posts`);
    return response.data;

};
