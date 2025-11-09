import { Message } from "@arco-design/web-react";

export const withLoading = async<
    T extends (...args: unknown[]) => any
>(
    fn: T,
    content?: string
): Promise<ReturnType<T>> => {
    const handle = Message.loading({
        content: content || "加载中",
        duration: 0
    }
    )
    try {
        const res = await fn();
        return res;
    } catch (err) {
        throw err;
    } finally {
        // handle.d()
    }

};


/**延时等待 */
export const delay = (time: number) => {
    return new Promise((res) => setTimeout(res, time))
}

export const safeParse = <T extends Record<string, any>>(jsonStr: string): T | null => {
    try {
        const res = JSON.parse(jsonStr);
        return res;
    } catch (err) {
        return null;
    }

}

export const injectScript = (scriptDom: HTMLScriptElement) => {
    document.body.insertBefore(scriptDom, document.body.children[0]);
}