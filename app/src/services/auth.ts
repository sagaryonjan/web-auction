
import axios from "axios";

export const login = (data: any) => axios.post('http://localhost:8001/api/login', data);

export const isUserLoggedIn = () => localStorage.getItem('USER_ID') ? true : false;

