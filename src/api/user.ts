
import request from "@/utils/request"
import axios from "axios";

export interface IUserInfo {
    "id": number;
    "memberLevelId": string
    "username": string;
    "nickname": string;
    "phone": string
    "status": 1,
    "createTime": string
    "icon": string
    "gender": string
    "birthday": string
    "city": string
    "job": string
    "personalizedSignature": string
    "sourceType": string
    "integration": string
    "growth": string
    "luckeyCount": string
    "historyIntegration": string
}

/**获取用户信息 */
export const getUserInfo = () => {
    return request<IUserInfo>({
        url: "/portal/info",
        method: "GET",
    })
}

export const submitContact = async (params: {
    name: string;
    phone: string;
    email: string;
    company: string;
    address: string;
    job: string;
    trade: string;
    scene: string;
}) => {
    const resp = await axios.post("https://ai.designgpt.cloud/utils/contactUs", {
        args: [params]
    });
    return resp
}