import axios from 'axios';
import {
    fetchProductsByWord,
    fetchProductsByWordFailure,
    fetchProductsByWordSuccess,
} from "../../../../redux/slices/managmentProducts/products/editProduct/listProductByWord";
const productApiEndpoint = import.meta.env.VITE_PRODUCT_MICROSERVICE_API_ENDPOINT;

export const GetListProductByWord = (word) => async (dispatch) => {    

    try {
        dispatch(fetchProductsByWord());
        const { data } = await axios.get(`${productApiEndpoint}/products/searchProductsByWord/${word}`);
        dispatch(fetchProductsByWordSuccess(data.data));
    } catch (error) {
        dispatch(fetchProductsByWordFailure(error));
    }


}