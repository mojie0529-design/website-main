import request from "@/utils/request"

/**用户登陆 */
export const login = (username: string, password: string) => {
    return request<{
        "tokenHead": string;
        "token": string
    }>({
        url: "/portal/login",
        method: "POST",
        data: {
            username,
            password
        }
    })
}

/**微信授权登录 */
export const getAuthUrl = (url: string, loginType: "wechat" | "alipay" = 'wechat') => {
    return request<string>({
        url: "/auth/h5/login",
        method: "GET",
        params: {
            loginType,
            authNotifyUrl: url
        }
    })
}

/**微信code方式登录 */
export const loginWx = (code: string) => {
    return request<{
        "tokenHead": string;
        "token": string
    }>({
        url: "/auth/wxAuthorize",
        method: "GET",
        params: {
            code
        }
    })
}

/**支付宝授权方式登录 */
export const loginAlipay = (code: string) => {
    return request<{
        "tokenHead": string;
        "token": string
    }>({
        url: "/auth/alipayAuthorize",
        method: "GET",
        params: {
            code
        }
    })
}



export const register = (data: {
    password: string;
    telephone: string;
    username: string;
}) => {
    return request({
        url: "/portal/register",
        method: "POST",
        data
    })
}
