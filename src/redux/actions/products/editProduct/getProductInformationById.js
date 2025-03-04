import axios from 'axios';
import {
    fetchGetProductInformationById,
    fetchGetProductInformationByIdFailure,
    fetchGetProductInformationByIdSuccess,
} from "../../../../redux/slices/managmentProducts/products/editProduct/getProductInformationByIdSlice";
const productApiEndpoint = import.meta.env.VITE_PRODUCT_MICROSERVICE_API_ENDPOINT;

export const GetProductInformationById = (product_id) => async (dispatch) => {

    try {
        dispatch(fetchGetProductInformationById());
        const { data } = await axios.get(`${productApiEndpoint}/products/productInformationById/${product_id}`);
        dispatch(fetchGetProductInformationByIdSuccess(data.data[0]));
    } catch (error) {
        dispatch(fetchGetProductInformationByIdFailure(error));
    }
}