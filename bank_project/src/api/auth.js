import jwtDecode from "jwt-decode";
import instance from ".";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  storeToken(data?.token);
  return data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  storeToken(data?.token);

  return data;
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
    } else return false;
  } else return false;
};
const logOut = () => {
  localStorage.removeItem("token");
};

const getAllUsers = async (userInfo) => {
  const { data } = await instance.get("/mini-project/api/auth/users", userInfo);
  return data;
};
const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

export { register, login, getAllUsers, storeToken, checkToken, logOut, me };
