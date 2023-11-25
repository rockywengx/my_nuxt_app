import { useUserStore } from "@/stores/userStore";
import { ElMessage } from "element-plus";
// wrap useFetch with configuration needed to talk to our API
export const fetchData = async (method, path, options) => {
  // modify options as needed
  const config = useRuntimeConfig();
  options = {
    ...options,
    method,
    baseURL: config.public.apiUrl,
    watch: false,
    headers: {
      // 'Content-Type': 'application/json',
      Accept: "application/json",
    },
  };
  const token = useUserStore()?.token;
  if (token) {
    Object.assign(options.headers, {
      Authorization: `Bearer ${token}`,
    });
  }

  function objectToFormData(obj, formData, parentKey = "") {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        const newKey = parentKey ? `${parentKey}[${key}]` : key;

        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            objectToFormData(item, formData, `${newKey}[${index}]`);
          });
        } else if (typeof value === "object" && value !== null) {
          objectToFormData(value, formData, newKey);
        } else {
          formData.append(newKey, value);
        }
      }
    }
  }

  const formData = new FormData();
  if (options.body) {
    objectToFormData(options.body, formData);
    options.body = formData;
  }

  const responseErrorHandle = (_ctx) => {
    if (_ctx.status.value === "error") {
      switch (_ctx.error.value.statusCode) {
        case 401:
        case 403:
          ElMessage({
            message: "請先登入",
            type: "error",
          });
          break;
        case 404:
          ElMessage({
            message: "找不到資源",
            type: "error",
          });
          break;
        case 422:
          ElMessage({
            message: "驗證錯誤",
            type: "error",
          });
          break;
        case 423:
          ElMessage({
            message: "請勿操作太過頻繁",
            type: "error",
          });
          break;
        case 400:
          ElMessage({
            message: _ctx.error.value,
            type: "error",
          });
          break;
        default:
          // 其他的錯誤才外拋
          return _ctx;
      }
    } else {
      return _ctx;
    }
  };
  const _ctx = await useFetch(path, options);
  return responseErrorHandle(_ctx);
};

export const get = async (path, data, options) => await fetchData("GET", path, { ...options, params: data });
export const post = async (path, data, options) => await fetchData("POST", path, { ...options, body: data });
export const put = async (path, data, options) => await fetchData("PUT", path, { ...options, body: data });
export const del = async (path, data, options) => await fetchData("DELETE", path, { ...options, body: data });
