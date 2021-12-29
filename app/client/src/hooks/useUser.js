import { useState } from "react";

import * as routes from "globals/hackEndpoints";
import * as api from "utils/api";
import * as session from "utils/session";

const useUser = () => {
  const [user, setUser] = useState(() => {
    return session.getSession().user;
  });

  const get = id => {
    const token = session.getSessionToken();
    if (!token) {
      const err = "Token not found";
      return Promise.reject(err);
    }
    return api.getRoute(routes.userGetRoute(id), {});
  };

  const getCurrentUser = () => {
    const token = session.getSessionToken();
    const userId = session.getSessionUserId();
    if (!token) {
      const err = "Token not found";
      return Promise.reject(err);
    }
    return api.getRoute(routes.userGetCurrentRoute(userId));
  };

  const getAll = () => {
    return api.getRoute(routes.userGetAllRoute);
  };

  const getPage = (page, size, text) => {
    return api.getRoute(routes.userGetPageRoute, {
      text: text,
      page: page ? page : 0,
      size: size ? size : 50
    });
  };

  const getResumeToken = id => {
    return api.getRoute(routes.getResumeTokenRoute(id), {
      id: id
    });
  };

  const getResume = token => {
    return api.getFileRoute(routes.getResumeRoute(token), {
      token: token
    });
  };

  const updateProfile = (id, profile) => {
    profile.name = `${profile.firstname} ${profile.lastname}`;
    return api.putRoute(routes.userProfileRoute(id), {
      profile
    });
  };

  const updateConfirmation = (id, confirmation) => {
    return api.putRoute(routes.userConfirmRoute(id), {
      confirmation
    });
  };

  const uploadResume = file => {
    return api.postFileRoute(routes.uploadResumeRoute, file);
  };

  const declineAdmission = id => {
    return api.postRoute(routes.userDeclineRoute(id), {});
  };

  const getQueue = () => {
    return api.getRoute(routes.adminViewQueueRoute);
  };

  const acceptQueue = () => {
    return api.postRoute(routes.adminAcceptQueueRoute);
  };

  const removeQueue = id => {
    return api.deleteRoute(routes.adminRemoveQueueRoute(id));
  };

  const getStats = () => {
    return api.getRoute(routes.adminStatsRoute);
  };

  const sendConfirmedEmail = sendGridId => {
    return api.postRoute(routes.adminSendConfirmedEmailRoute(sendGridId));
  };

  const sendAdmittedEmail = () => {
    return api.postRoute(routes.adminSendAdmittedEmailRoute);
  };

  const sendWaiverEmail = id => {
    return api.postRoute(routes.adminSendWaiver(id));
  };

  const queueUnadmitted = () => {
    return api.postRoute(routes.adminQueueUnadmittedRoute);
  };

  //TODO: add the user object here and export out
  //TODO: add setUser so that the user can be updated based on calls
  return {
    user,
    get,
    getCurrentUser,
    getAll,
    getPage,
    getResumeToken,
    getResume,
    updateProfile,
    updateConfirmation,
    uploadResume,
    declineAdmission,
    getQueue,
    acceptQueue,
    removeQueue,
    getStats,
    sendConfirmedEmail,
    sendAdmittedEmail,
    sendWaiverEmail,
    queueUnadmitted
  };
};

export default useUser;
