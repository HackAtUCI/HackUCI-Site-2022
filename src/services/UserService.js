import * as routes from "../globals/hack-endpoints";
import * as api from "../utils/api";
import * as session from "../utils/session";

export default {
  get: id => {
    const token = session.getSessionToken();
    if (!token) {
      const err = "Token not found";
      return Promise.reject(err);
    }
    return api.getRoute(routes.userGetRoute(id), {});
  },

  getCurrentUser: () => {
    const token = session.getSessionToken();
    const userId = session.getSessionUserId();
    if (!token) {
      const err = "Token not found";
      return Promise.reject(err);
    }
    return api.getRoute(routes.userGetCurrentRoute(userId));
  },

  getAll: () => {
    return api.getRoute(routes.userGetAllRoute);
  },

  getPage: (page, size, text) => {
    return api.getRoute(routes.userGetPageRoute, {
      text: text,
      page: page ? page : 0,
      size: size ? size : 50
    });
  },

  updateProfile: (id, profile) => {
    profile.name = `${profile.firstname} ${profile.lastname}`;
    return api.putRoute(routes.userProfileRoute(id), {
      profile
    });
  },

  updateConfirmation: (id, confirmation) => {
    return api.putRoute(routes.userConfirmRoute(id), {
      confirmation
    });
  },

  declineAdmission: id => {
    return api.postRoute(routes.userDeclineRoute(id), {});
  }
};
