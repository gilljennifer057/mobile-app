import axios from "axios";
import { EXPO_BASE_URL } from "@env"; // Import environment variable

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: EXPO_BASE_URL, // This will apply to all requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
