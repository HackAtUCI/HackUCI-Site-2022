import axios from 'axios';

export const get = async (path, params) => {

    // Result promise 
    const result = await axios({
        method: 'get',
        url: path,
        responseType: 'application/json',
        params: params
        // Can possibly add our user secret here for all API calls?
    });

    return result;
}

export const post = async (path, params) => {

    // Result promise 
    const result = await axios({
        method: 'post',
        url: path,
        responseType: 'application/json',
        params: params
    });

    return result;
}