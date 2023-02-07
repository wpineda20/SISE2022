import axios from "axios";

const cronClosingApi = axios.create({
    baseURL: "/api/cronClosing",
});

export default cronClosingApi;
