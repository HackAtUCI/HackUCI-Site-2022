import axios from "axios";
import { getSessionToken } from "../utils/session";

//Sets default header for the requests to the API with the token
const headers = { "x-access-token": `${getSessionToken()}` };

export const getRoute = async (path, params) => {
  // Result promise
  const result = await axios({
    method: "get",
    url: path,
    responseType: "application/json",
    params: params,
    headers
    // Can possibly add our user secret here for all API calls?
  });

  return result;
};

export const postRoute = async (path, data) => {
  // Result promise
  const result = await axios({
    method: "post",
    url: path,
    responseType: "application/json",
    data: data,
    headers
  });
  // Can possibly add our user secret here for all API calls?
  return result;
};

export const putRoute = async (path, data) => {
  // Result promise
  const result = await axios({
    method: "put",
    url: path,
    responseType: "application/json",
    data: data,
    headers
  });
  // Can possibly add our user secret here for all API calls?
  return result;
};

export const deleteRoute = async (path, data) => {
  // Result promise
  const result = await axios({
    method: "delete",
    url: path,
    responseType: "application/json",
    data: data,
    headers
  });
  // Can possibly add our user secret here for all API calls?
  return result;
};
