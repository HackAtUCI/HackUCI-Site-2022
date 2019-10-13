import { useState } from "react";

import * as routes from "../globals/hackEndpoints";
import * as api from "../utils/api";
import * as session from "../utils/session";

const useAuth = () => {
  //TODO: change the logged in logic to use context instead of state

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return session.getSessionToken() ? true : false;
  });

  const [user, setUser] = useState(() => {
    return session.getSession().user;
  });

  const register = (email, password) => {
    return api
      .postRoute(routes.authRegisterRoute, {
        email,
        password
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  const loginWithPassword = (email, password) => {
    return api
      .postRoute(routes.authLoginRoute, {
        email,
        password
      })
      .then(data => {
        session.setSession(data.data.token, data.data.user);
        setIsLoggedIn(true);
        setUser(data.data.user);
        return data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  const loginWithToken = token => {
    return api
      .postRoute(routes.authLoginRoute, {
        token
      })
      .then(data => {
        session.setSession(data.data.token, data.data.user);
        setIsLoggedIn(true);
        setUser(data.data.user);
        return data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  const logout = () => {
    session.clearSession();
    setIsLoggedIn(false);
    setUser(null);
  };

  const verify = emailToken => {
    return api
      .getRoute(routes.authVerifyRoute + emailToken, {})
      .then(data => {
        session.setUser(data.data);
        setIsLoggedIn(true);
        setUser(data.data);
        return data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  const resendVerificationEmail = () => {
    const id = session.getSessionUserId();
    return api
      .postRoute(routes.authResendVerifyRoute, {
        id
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  const sendResetEmail = email => {
    return api
      .postRoute(routes.authResetEmailRoute, {
        email
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  const resetPassword = (token, password) => {
    return api
      .postRoute(routes.authResetPasswordRoute, {
        token,
        password
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  //TODO: Add logic for token refresh after expiration

  // TODO: Add logic for getting the current user and logged in state
  return {
    isLoggedIn,
    user,
    register,
    loginWithPassword,
    loginWithToken,
    logout,
    verify,
    resendVerificationEmail,
    sendResetEmail,
    resetPassword
  };
};

export default useAuth;
