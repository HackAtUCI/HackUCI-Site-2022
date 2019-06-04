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

  get: id => {
    console.log(routes.userGetRoute(id));
    return api.getRoute(routes.userGetRoute(id), {});
  },

  getCurrentUser: () => {
    //TODO: perform check for the local storage token's user id
    const token = null;
    const userId = token; //TODO get userID from session
    if (!token) {
      const err = "Token not found";
      return Promise.reject(err);
    }
    return api.getRoute(routes.userGetCurrentRoute(userId));
  },

  getAll: () => {
    console.log(routes.userGetAllRoute);
    return api.getRoute(routes.userGetAllRoute);
  },

  getPage: (page, size, text) => {
    console.log(routes.userGetPageRoute);
    return api.getRoute(routes.userGetPageRoute, {
      text: text,
      page: page ? page : 0,
      size: size ? size : 50
    });
  },

  updateProfile: (id, profile) => {
    console.log(routes.userProfileRoute(id));
    profile.name = `${profile.firstname} ${profile.lastname}`;
    return api.putRoute(routes.userProfileRoute(id), {
      profile
    });
  },

  updateConfirmation: (id, confirmation) => {
    //Confirmation is an object
    console.log(routes.userConfirmRoute(id));
    return api.putRoute(routes.userConfirmRoute(id), {
      confirmation
    });
  },

  declineAdmission: id => {
    console.log(routes.userDeclineRoute(id));
    return api.postRoute(routes.userDeclineRoute(id), {});
  }
};
