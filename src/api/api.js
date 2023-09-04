import { APIGetHelper, APIHelperFetchDataAPI, APIPostHelper } from "../helpers/api/ApiHelper";
import AuthStore from "../modules/auth/auth/AuthStore";

// import { APIHelperFetchWithErrorHandler } from "../helpers/api/api.helper";
export const APISignIn = async ({ email, password }) => {
    try {
        const responseData = await APIPostHelper({
            endpoint: '/auth/sign-in',
            data: { email, password },
        });
        console.log('apasih:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error signIn:', error);
        throw error;
    }
}

export const APIGetUserByToken = async token => {
    try {
        const responseData = await APIGetHelper({
            endpoint: `/users/byToken`,
            params: { token }
        })
        console.log('responseData', responseData);
        return responseData;
    } catch (error) {
        console.error('Error getUserByToken:', error);
        throw error;
    }
}

export const APIGetPuniaList = async (filters) => {
    try {
        console.log('AuthStore.token::::', AuthStore.token);
        const responseData = await APIGetHelper({
            endpoint: `/program`,
            params: { filters },
        })
        console.log('responseData', responseData);
        return responseData;
    } catch (error) {
        console.error('Error getUserByToken:', error);
        throw error;
    }
}