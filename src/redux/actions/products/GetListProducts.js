import axios from 'axios';
import {
    fetchProducts,
    fetchProductsFailure,
    fetchProductsSuccess,
} from "../../slices/managmentProducts/products/listProductsSlice";
const productApiEndpoint = import.meta.env.VITE_PRODUCT_MICROSERVICE_API_ENDPOINT;;

// Function for get all products
// The function will have a param for get product for parts

export const GetListProducts = () => async (dispatch) => {

    try {
        dispatch(fetchProducts());
        const { data } = await axios.get(`${productApiEndpoint}/products`);
        dispatch(fetchProductsSuccess(data.data));
    } catch (error) {
        dispatch(fetchProductsFailure(error));
    }


}