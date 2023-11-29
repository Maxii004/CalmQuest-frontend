import axios from "axios";
//
export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
