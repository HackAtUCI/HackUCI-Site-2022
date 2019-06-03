//Utility method to get the proper base URL from the environment
function getBaseURL() {
  switch (process.env.REACT_APP_API_DEFAULT_OPTION) {
    case process.env.REACT_APP_API_DEVELOPMENT_OPTION:
      return process.env.REACT_APP_DEVELOPMENT_API;
    case process.env.REACT_APP_API_STAGING_OPTION:
      return process.env.REACT_APP_STAGING_API;
    case process.env.REACT_APP_API_PRODUCTION_OPTION:
      return process.env.REACT_APP_PRODUCTION_API;
    default:
      return process.env.REACT_APP_DEVELOPMENT_API;
  }
}

//Base URL
export const baseURL = getBaseURL();

//Service base endpoints
export const baseAuthRoute = "auth/";
export const baseUsersRoute = "api/users/";
export const baseSettingsRoute = "api/settings/";

//Auth endpoints
export const authLoginRoute = baseURL + baseAuthRoute + "login";
export const authRegisterRoute = baseURL + baseAuthRoute + "register";
export const authVerifyRoute = baseURL + baseAuthRoute + "verify/";
export const authResendVerifyRoute = baseURL + baseAuthRoute + "verify/resend";
export const authResetEmailRoute = baseURL + baseAuthRoute + "reset";
export const authResetPasswordRoute =
  baseURL + baseAuthRoute + "reset/password";

//User endpoints
export const userGetPageRoute = baseURL + "api/users";
export const userGetAllRoute = baseURL + baseUsersRoute;

export const userGetCurrentRoute = function(id) {
  return baseURL + baseUsersRoute + id;
};

export const userGetRoute = function(id) {
  return baseURL + baseUsersRoute + id;
};

export const userProfileRoute = function(id) {
  return baseURL + baseUsersRoute + id + "/profile";
};

export const userConfirmRoute = function(id) {
  return baseURL + baseUsersRoute + id + "/confirm";
};

export const userDeclineRoute = function(id) {
  return baseURL + baseUsersRoute + id + "/decline";
};

//Admin user endpoints (DO NOT USE UNLESS ADMIN CREDENTIALS VALID)
export const adminStatsRoute = baseURL + baseUsersRoute + "stats";
export const adminViewQueueRoute = baseURL + baseUsersRoute + "viewQueue";
export const adminAcceptQueueRoute = baseURL + baseUsersRoute + "acceptQueue";
export const adminSendAdmittedEmailRoute =
  baseURL + baseUsersRoute + "emailAdmitted";
