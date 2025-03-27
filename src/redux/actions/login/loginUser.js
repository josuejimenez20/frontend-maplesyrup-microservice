import axios from 'axios';
import {
    fetchNewUser,
    fetchNewUserSuccess,
    fetchNewFaulire
} from "../../slices/users/newUserSlice";

const userApiEndpoint = import.meta.env.VITE_USER_MICROSERVICE_API_ENDPOINT;


export const loginUser = (data) => async (dispatch) => {

    try {
        dispatch(fetchNewUser());
        const response = await axios.post(`${userApiEndpoint}/login/verify`, data);
        dispatch(fetchNewUserSuccess(response.data.response));
    } catch (error) {
        dispatch(fetchNewFaulire("Error al ingresar, el ususario no existe, por favor intente nuevamente"));
    }
}