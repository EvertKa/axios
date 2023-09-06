import axios from "axios";

export const eleringAPI = axios.create({
    baseURL: 'https://dashboard.elering.ee/api'
});