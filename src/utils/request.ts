import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "./auth";
import { userStore } from "@/stores";
import { getDevice } from "./env";
import { Message } from "@arco-design/web-react";

// 创建axios实例
const service = axios.create({
    baseURL: userStore.axiosHost, // api的base_url
    timeout: 15000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    config => {
        config.baseURL = userStore.axiosHost;
        const token = getToken()
        if (Boolean(token)) {
            config.headers["Authorization"] = token; // 让每个请求携带自定义token 请根据实际情况自行修改
        }

        config.headers['scene'] = getDevice();
        return config;
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);

export const exitAccount = () => {

   
}
// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非200是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        if (res.code !== 200) {
            Message.error(res.message || "网络错误")

            // 401:未登录;
            if (res.code === 401) {
                exitAccount();
            }
            return Promise.reject(res);
        } else {
            return response.data;
        }
    },
    error => {
        if (error?.response?.data?.code === 401) {
            exitAccount();
        } else {
            Message.error(error?.response?.data?.message || "网络错误")
        }

        return Promise.reject(error?.response?.data);
    }
);

export default <T>($config: AxiosRequestConfig) => service($config).then(res => res.data as T);
