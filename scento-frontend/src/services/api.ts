import axios from "axios";

const api = axios.create({

  baseURL: "https://scento-backend-8q5o.onrender.com/api"

});

export default api;