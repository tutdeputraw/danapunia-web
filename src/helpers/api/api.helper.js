import { BASE_API_URL } from "./constants";

export const APIHelperFetchWithErrorHandler = async (url, options) => {
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

export const APIHelperFetchDataAPI = async ({ data, endpoint, token, params }) => {
    const url = `${BASE_API_URL}${endpoint}${createQueryString(params)}`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
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

function createQueryString(params) {
    if (!params) {
        return '';
    }

    const queryString = new URLSearchParams(params).toString();
    return queryString.length > 0 ? `?${queryString}` : '';
}