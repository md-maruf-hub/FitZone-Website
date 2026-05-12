import axios from "axios";

const api = axios.create({
  baseURL: "https://fitzone-website-asrv.onrender.com/api",
});

export default api;