import axios from "axios";

axios.defaults.baseURL = "https://djangoapi-81126c05d8b6.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();