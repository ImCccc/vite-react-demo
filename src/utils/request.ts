import { message } from 'antd';
import axios, {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { LOGIN_PATH } from '@/config/constant';
import { clearLocalStorage, getToken } from '@/utils/storage';

interface NewAxiosInstance extends AxiosInstance {
  <T>(url: string, config: AxiosRequestConfig): Promise<T>;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
}

const request: NewAxiosInstance = axios.create({
  baseURL: '',
  timeout: 10000,
});

const goLogin = () => {
  clearLocalStorage();
  location.href = `/#${LOGIN_PATH}`;
};

//拦截器
request.interceptors.request.use((config) => {
  try {
    const token = getToken();
    if (config.headers instanceof Object) {
      config.headers.authtoken = `Bearer ${token}`;
      config.headers.appkey = 'smart-cloud';
      config.headers['Content-Type'] = 'application/json';
    }
  } catch (e) {}
  return config;
});

request.interceptors.response.use(
  (response) => {
    if (+response.status === 401) {
      goLogin();
    }

    const { data } = response;
    if (data?.code === 'OK' || data?.code === 0) {
      return Promise.resolve(data);
    } else {
      message.error(`${data.code}: ${data.msg}`);
      return Promise.reject(data);
    }
  },
  (error) => {
    if (error.response.status === 401) {
      return goLogin();
    }
    Promise.reject(error);
  },
);

export default request;
