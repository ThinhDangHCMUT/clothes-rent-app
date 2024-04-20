import axios from "axios";

// Create an Axios instance with a custom configuration
const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || window.location.origin,
});

export default customAxios;
