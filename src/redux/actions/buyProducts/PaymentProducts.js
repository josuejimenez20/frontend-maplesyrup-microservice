import axios from 'axios';
import {
    fetchPaymentProducts,
    fetchPaymentProductsFailure,
    fetchPaymentProductsSuccess
} from "../../slices/managmentProducts/products/paymentProductsSlice";
const productApiEndpoint = import.meta.env.VITE_PRODUCT_MICROSERVICE_API_ENDPOINT;

// Function for get all products
// The function will have a param for get product for parts

export const purchasePayment = (data_payment) => async (dispatch) => {

    try {
        dispatch(fetchPaymentProducts());
        const response = await axios.post(`${productApiEndpoint}/paypal/payment`, data_payment);

        dispatch(fetchPaymentProductsSuccess(true));
    } catch (error) {
        dispatch(fetchPaymentProductsFailure(error));
    }


}