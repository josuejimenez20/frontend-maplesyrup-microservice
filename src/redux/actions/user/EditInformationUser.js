import axios from 'axios';
import {
    fetchEditUser,
    fetchEditFailure,
    fetchEditUserSuccess
} from "../../slices/users/editUserSlice";
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
const userMicroserviceEndpoint = import.meta.env.VITE_USER_MICROSERVICE_API_ENDPOINT;

export const EditInformationUser = (editInformationUser) => async (dispatch) => {

    try {
        dispatch(fetchEditUser());
        const response = await axios.post(`${userMicroserviceEndpoint}/users/edit`, editInformationUser);
        dispatch(fetchEditUserSuccess(true));
    } catch (error) {
        dispatch(fetchEditFailure("Error al editar la informacion del ususario"));
    }
}