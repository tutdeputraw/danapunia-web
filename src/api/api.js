import { APIHelperFetchDataAPI, APIHelperFetchWithErrorHandler } from "../helpers/api/api.helper";

// import { APIHelperFetchWithErrorHandler } from "../helpers/api/api.helper";
export const APISignIn = async ({ email, password }) => {
    const url = `/auth/sign-in`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    };

    try {
        const responseData = await APIHelperFetchWithErrorHandler(url, options);
        return responseData;
    } catch (error) {
        console.error('Error signIn:', error);
        throw error;
    }
}

export const APIGetUserByToken = async token => {
    console.log(token);
    try {
        const responseData = APIHelperFetchDataAPI({
            endpoint: `/users/byToken`,
            params: { token }
        })
        return responseData;
    } catch (error) {
        console.error('Error getUserByToken:', error);
        throw error;
    }
}