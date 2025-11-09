import { MutableRefObject, useEffect, useMemo, useState } from "react";

export const useExpose = (ref: MutableRefObject<any>, options: { threshold?: number[] } = { threshold: [0.1] }) => {
    const [expose, setExpose] = useState(false);
    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) => !expose && entry.isIntersecting && setExpose(true), options),
        [],
    );

    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return {
        expose
    };
}