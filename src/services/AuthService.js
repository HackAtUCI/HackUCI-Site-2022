import * as routes from "../globals/hack-endpoints";
import * as api from "../utils/api";

export default {
  loginWithPassword: (email, password) => {
    console.log(routes.authLoginRoute);
    return api
      .postRoute(routes.authLoginRoute, {
        email,
        password
      })
      .then(data => {
        //TODO: Add logic for storing refresh token in session
        return data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  loginWithToken: token => {
    //TODO: Add logic to use token in storage to make request
    console.log(routes.authLoginRoute);
    return api
      .postRoute(routes.authLoginRoute, {
        token
      })
      .then(data => {
        //TODO: Add logic to store refresh token in session
        return data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  logout: () => {
    //TODO: Add logic to remove token from local storage
  },

  verify: token => {
    console.log(routes.authVerifyRoute + token);
    return api
      .getRoute(routes.authVerifyRoute + token, {})
      .then(data => {
        //TODO: Add logic to store token in session
        return data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  resendVerificationEmail: () => {
    //TODO: Add logic to get id from session. Take out dummy value
    console.log(routes.authResendVerifyRoute);
    const id = 1;
    return api.postRoute(routes.authResendVerifyRoute, {
      id
    });
  },

  sendResetEmail: email => {
    console.log(routes.authResetEmailRoute);
    return api.postRoute(routes.authResetEmailRoute, {
      email
    });
  },

  resetPassword: (token, password) => {
    console.log(routes.authResetPasswordRoute);
    return api.postRoute(routes.authResetPasswordRoute, {
      token,
      password
    });
  }
};
