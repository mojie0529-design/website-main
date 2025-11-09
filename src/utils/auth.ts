import { userStore } from "@/stores";
import Cookies from "js-cookie";

const TokenKey = "Authorization";

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token: string) {
    Cookies.set(TokenKey, token, { expires: 7 })
    userStore.setTempToken(token);

}

export function removeToken() {
    Cookies.remove(TokenKey)
    userStore.setTempToken("");
}

/**读取登录返回的token数据并保存 */
export const readLoginToken = (data: { tokenHead: string, token: string }) => {
    const { tokenHead, token } = data;
    const tokenStr = `${tokenHead} ${token}`
    setToken(tokenStr);
}