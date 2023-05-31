import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});

export default authAxios;
