import instance from ".";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
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
const getAllUsers = async (userInfo) => {
  const { data } = await instance.get("/mini-project/api/auth/users", userInfo);
  //   storeToken(data?.token);
  return data;
};

export { register, login, getAllUsers };
