
import axios from "axios";

export const fetchProducts = () => axios.get('http://localhost:8001/api/products');

// export const bidProduct = (id: number, body: object) => {
//     return axios.post(`http://localhost:8001/api/products/${id}/bid-now`, body);
// };