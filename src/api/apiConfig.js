import axios from "axios";

const instance = axios.create({
  baseURL: "http://54.197.12.68:8081/",
  headers: {
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

const multipartInstance = axios.create({
  baseURL: "http://54.197.12.68:8081/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});


export {instance, multipartInstance }
export default api