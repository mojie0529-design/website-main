declare interface Window {
    ap: AP
    AlipayJSBridge: any
}

interface Ap {
    getAuthCode: (params: {
        appId: string;
        scopes: ['auth_user']
    }, callback: (res: any) => void) => void
}