import axios from "axios";
import { getCookie } from "../cookie/Cookie";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

/** 사진 파일 업로드 멀티파트 인스턴스 */
const multipartInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

/**멀티파트 인스턴스 요청 인터셉트 */
multipartInstance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const Authorization = getCookie("token");  
  config.headers["Authorization"] = `${Authorization}`;
  return config;
});

const tokenInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

/**토큰 인스턴스 요청 인터셉트 */
tokenInstance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const Authorization = getCookie("token");  
  config.headers["Authorization"] = `${Authorization}`;
  return config;
});

export {instance, multipartInstance, tokenInstance }
export default api