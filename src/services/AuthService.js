import * as routes from "../globals/hack-endpoints";
import * as api from "../utils/api";
import * as session from "../utils/session";

export default {
  register: (email, password) => {
    return api.postRoute(routes.authRegisterRoute, {
      email,
      password
    });
  },

  loginWithPassword: (email, password) => {
    return api
      .postRoute(routes.authLoginRoute, {
        email,
        password
      })
      .then(data => {
        session.setSession(data.data.token, data.data.user);
        return data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  loginWithToken: token => {
    return api
      .postRoute(routes.authLoginRoute, {
        token
      })
      .then(data => {
        session.setSession(data.data.token, data.data.user);
        return data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  logout: () => {
    session.clearSession();
  },

  /**
   * This method refers to the verification email. For this method, the email is signed with JWT. For the password and logins above, the user id is signed with JWT
   */
  verify: emailToken => {
    return api
      .getRoute(routes.authVerifyRoute + emailToken, {})
      .then(data => {
        session.setUser(data.data);
        return data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  resendVerificationEmail: () => {
    const id = session.getSessionUserId();
    return api.postRoute(routes.authResendVerifyRoute, {
      id
    });
  },

  sendResetEmail: email => {
    return api.postRoute(routes.authResetEmailRoute, {
      email
    });
  },

  resetPassword: (token, password) => {
    return api.postRoute(routes.authResetPasswordRoute, {
      token,
      password
    });
  }
};
