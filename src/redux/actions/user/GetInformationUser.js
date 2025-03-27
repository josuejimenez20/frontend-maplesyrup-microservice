import axios from 'axios';
import {
    fetchUserInformation,
    fetchUserInformationSuccess,
    fetchUserInformationFailure
} from "../../slices/users/informationUserSlice";

const userMicroserviceEndpoint = import.meta.env.VITE_USER_MICROSERVICE_API_ENDPOINT;

export const GetInformationUser = (id_user, email, password) => async (dispatch) => {
    
    try {
        dispatch(fetchUserInformation());
        const { data } = await axios.get(`${userMicroserviceEndpoint}/users/information/${id_user}}/${email}/${password}`);
        dispatch(fetchUserInformationSuccess(data.response[0]));
    } catch (error) {
        dispatch(fetchUserInformationFailure(error));
    }
}