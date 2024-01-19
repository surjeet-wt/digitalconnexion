import axios from "axios";

const domainUrl = "https://digitalconnexion.com";

const instance = axios.create({
  baseURL: domainUrl + "/admin/api",
});

export default instance;
