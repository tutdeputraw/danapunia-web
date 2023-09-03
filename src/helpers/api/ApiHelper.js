import AuthStore from "../../modules/auth/auth/AuthStore";
import { BASE_API_URL } from "./ApiConstantHelper";

const APIHelperFetchWithErrorHandler = async (url, options) => {
    try {
        const response = await fetch(`${BASE_API_URL}${url}`, options);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error making API request:', error);
        throw error;
    }
}

const createQueryString = params => {
    if (!params) return '';

    const queryString = new URLSearchParams(params).toString();
    return queryString.length > 0 ? `?${queryString}` : '';
}

export const APIGetHelper = async ({ endpoint, token, params, data }) => {
    const url = `${endpoint}${createQueryString(params)}`;
    console.log('url:', url);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ?? AuthStore.token,
        },
        body: JSON.stringify(data),
    };

    try {
        const responseData = await APIHelperFetchWithErrorHandler(url, options);
        return responseData;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
}

export const APIPostHelper = async ({ endpoint, token, params, data }) => {
    const url = `${endpoint}${createQueryString(params)}`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ?? AuthStore.token,
        },
        body: JSON.stringify(data),
    };

    try {
        const responseData = await APIHelperFetchWithErrorHandler(url, options);
        return responseData;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
}

export const APIPutHelper = async ({ endpoint, token, params, data }) => {
    const url = `${endpoint}${createQueryString(params)}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ?? AuthStore.token,
        },
        body: JSON.stringify(data),
    };

    try {
        const responseData = await APIHelperFetchWithErrorHandler(url, options);
        return responseData;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
}

export const APIDeleteHelper = async ({ endpoint, token, params, data }) => {
    const url = `${endpoint}${createQueryString(params)}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ?? AuthStore.token,
        },
        body: JSON.stringify(data),
    };

    try {
        const responseData = await APIHelperFetchWithErrorHandler(url, options);
        return responseData;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
}