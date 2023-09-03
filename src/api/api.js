import { APIGetHelper, APIHelperFetchDataAPI, APIPostHelper } from "../helpers/api/ApiHelper";

// import { APIHelperFetchWithErrorHandler } from "../helpers/api/api.helper";
export const APISignIn = async ({ email, password }) => {
    const url = `/auth/sign-in`;
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    // };

    try {
        // const responseData = await APIHelperFetchWithErrorHandler(url, options);
        const responseData = await APIPostHelper({
            endpoint: '/auth/sign-in',
            data: { email, password },
        });
        return responseData;
    } catch (error) {
        console.error('Error signIn:', error);
        throw error;
    }
}

export const APIGetUserByToken = async token => {
    console.log(token);
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