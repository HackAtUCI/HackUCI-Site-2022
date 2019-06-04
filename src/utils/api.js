import axios from "axios";

export const getRoute = async (path, params) => {
  // Result promise
  const result = await axios({
    method: "get",
    url: path,
    responseType: "application/json",
    params: params
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
    data: data
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
    data: data
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
    data: data
  });
  // Can possibly add our user secret here for all API calls?
  return result;
};
