import axios from 'axios';
import {
    fetchNewProduct,
    fetchNewProductFailure,
    fetchNewProductSuccess
} from "../../slices/managmentProducts/products/newProduct";
const productApiEndpoint = import.meta.env.VITE_PRODUCT_MICROSERVICE_API_ENDPOINT;

export const AddNewProduct = (data) => async (dispatch) => {

    try {
        dispatch(fetchNewProduct());
        const response = await axios.post(`${productApiEndpoint}/products/AddNewProduct`, data);
        dispatch(fetchNewProductSuccess(true));
    } catch (error) {    
        dispatch(fetchNewProductFailure(error));
    }


}