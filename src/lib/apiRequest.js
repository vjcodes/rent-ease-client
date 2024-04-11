import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://rent-ease-server.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;