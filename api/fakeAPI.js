import axios from "axios";

export const fakeAPI = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
});