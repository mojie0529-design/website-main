import request from "@/utils/request";

export const createTask = (data: {
    image: string;
    prompt: string;
}) => {
    const uid = Date.now();
    return request<{
        task_id: string
    }>({
        method: "POST",
        url: "/furnishings/submitImage",
        data: {
            ...data,
            task_id: uid
        }
    })
}

export const queryTask = (task_id: string) => {

    return request < {
        step?: number;
        progress?:number;
        final_output?: { id: string; image: string }[]
    } > ({
        method: "GET",
        url: "/furnishings/progress",
        params: {
            task_id
        }
    })
}