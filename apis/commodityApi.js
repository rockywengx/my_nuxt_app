import { get, post } from "@/utils/request";
export const loadItems = async (params) => {
  const { data: data } = await get("api/commodities/list", params);
  return data.value.data;
};

export const findItem = async (id) => {
  const { data: data } = await get(`api/commodities/${id}`);
  return data.value.data;
};