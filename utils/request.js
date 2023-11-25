import { useUserStore } from "@/stores/userStore";
// wrap useFetch with configuration needed to talk to our API
export const fetchData = async (method, path, options) => {
  //   const setAlertObj = inject('setAlertObj')
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
          setAlertObj({
            show: true,
            title: "請先登入",
            type: "error",
          });
          break;
        case 404:
          setAlertObj({
            show: true,
            title: "找不到資源",
            type: "error",
          });
          break;
        case 422:
          setAlertObj({
            show: true,
            title: "驗證錯誤",
            type: "error",
          });
          break;
        case 423:
          setAlertObj({
            show: true,
            title: "請勿操作太過頻繁",
            type: "error",
          });
          break;
        case 400:
          setAlertObj({
            show: true,
            title: _ctx.error.value,
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
  const _ctx = useFetch(path, options);
  return responseErrorHandle(_ctx);
};

export const get = async (path, data, options) => fetchData("GET", path, { ...options, params: data });
export const post = async (path, data, options) => fetchData("POST", path, { ...options, body: data });
export const put = async (path, data, options) => fetchData("PUT", path, { ...options, body: data });
export const del = async (path, data, options) => fetchData("DELETE", path, { ...options, body: data });
