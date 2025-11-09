
// 判断是否为微信浏览器
export function isWeixinBrowser() {
    let ua = navigator?.userAgent?.toLowerCase?.();
    return ua && /micromessenger/.test(ua) ? true : false;
}

/**判断设备环境 */
export const getDevice = () => {
    const userAgent = navigator.userAgent;
    const isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
        return "iOS"
    }
    const isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1;
    if (isAndroid) {
        return "Android"
    }

    return "Wap"
}

export const isAliBrowser = () => {
    //判断是支付宝app的浏览器
    const userAgent = navigator.userAgent.toLowerCase();
    return /alipay/.test(userAgent)
}
