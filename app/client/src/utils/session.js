const tokenKey = "token";
const userKey = "user";

export const setSession = (token, user) => {
  localStorage.setItem(tokenKey, token);
  localStorage.setItem(userKey, JSON.stringify(user));
};

export const setUser = user => {
  localStorage.setItem(userKey, JSON.stringify(user));
};

export const clearSession = () => {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
};

export const getSession = () => {
  const token = localStorage.getItem(tokenKey);
  let user = localStorage.getItem(userKey);
  user = JSON.parse(user);
  return {
    token,
    user
  };
};

export const getSessionToken = () => {
  const token = localStorage.getItem(tokenKey);
  if (token) {
    let start = token.substring(0, 2);
    if (start == "1+") {
      return token;
    } else {
      return null;
    }
  }

  return token;
};

export const getSessionUserId = () => {
  let user = localStorage.getItem(userKey);
  user = JSON.parse(user);
  return user ? user._id : null;
};
