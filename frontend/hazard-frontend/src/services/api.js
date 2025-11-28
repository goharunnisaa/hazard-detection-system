import axios from "axios";

const API = axios.create({
  baseURL: "https://hazard-detection-system.onrender.com/api"    // backend base URL
});

export default API;
