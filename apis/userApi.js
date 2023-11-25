import { post } from "@/utils/request";
export const login = async (params) => {
  const { data: data } = await post("api/login", params);
  console.log(data.value.data);
  return data.value.data;
};

export const logout = async () => {
  const { data } = await post("api/logout");
  return data;
};
