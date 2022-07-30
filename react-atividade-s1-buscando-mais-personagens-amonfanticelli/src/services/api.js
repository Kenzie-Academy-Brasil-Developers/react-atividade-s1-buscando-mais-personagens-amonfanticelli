import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/",
  timeout: 5000,
});

export default api;
