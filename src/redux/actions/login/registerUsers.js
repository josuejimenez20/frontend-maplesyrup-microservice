import axios from 'axios';
import {
    fetchNewUser,
    fetchNewUserSuccess,
    fetchNewFaulire
} from "../../slices/users/newUserSlice";

const userApiEndpoint = import.meta.env.VITE_USER_MICROSERVICE_API_ENDPOINT;

export const RegisterNewUser = (data) => async (dispatch) => {

    try {

        dispatch(fetchNewUser());

        const response = await axios.post(`${userApiEndpoint}/users/new`, data);
        dispatch(fetchNewUserSuccess(response.data));

    } catch (error) {
        dispatch(fetchNewFaulire("Error al registrar el usuario, intente nuevamente"));
    }


}