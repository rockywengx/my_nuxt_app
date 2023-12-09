import { post, put } from "@/utils/request";
export const putItem = async (params) => {
  console.log("params", params);
  const { data: data } = await post("api/cart", params);
  return data.value.data;
};

export const saveCart = async () => {
  const { data } = await put("api/cart", params);
  return data;
};
