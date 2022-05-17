import axios from "axios";

const instance = axios.create({
  baseURL: "https://sea-shoes-api.herokuapp.com/api",
});

export default instance;
