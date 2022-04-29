import axios from "axios";

const url = 'http://localhost:8000/products/';

export const fetchProducts = () => axios.get(url);