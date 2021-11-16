
import axios from "axios";

export const login = () => axios.get('http://localhost:8001/api/login');


export const isUserLoggedIn = () => localStorage.getItem('USER_ID') ? true : false;

