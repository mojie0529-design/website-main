import { FC, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { useAsyncEffect } from "ahooks";
import { loadImg } from "@/utils/file";
interface IProps {
    imgs: [{
        url: string;
        tag?: string;
    }, {
        url: string;
        tag?: string;
    }];
}
interface ISize {
    width: number;
    height: number
}

const calcPosition = (containerSize: ISize, imgSize: ISize) => {
    const { width: cw, height: ch } = containerSize;
    const { width, height } = imgSize;
    const rate = Math.min(width / cw, height / ch);
    const relW = width / rate;
    const relH = height / rate;

    return {
        left: (cw - relW) / 2,
        top: (ch - relH) / 2,
        width: relW,
        height: relH
    }
}
export const ChangeImage: FC<IProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const backImgRef = useRef<HTMLImageElement | null>(null)
    const frontImgRef = useRef<HTMLImageElement | null>(null)
    const [containerSize, setContainerSize] = useState<ISize>({ width: 0, height: 0 })
    const [imgSize, setImgSize] = useState([{ width: 0, height: 0, left: 0, top: 0 }, { width: 0, height: 0, left: 0, top: 0 }])
    const { imgs } = props;
    const backInfo = imgs[1];
    const frontInfo = imgs[0];


    useAsyncEffect(async () => {
        if (!containerSize?.width || !containerSize?.height) {
            return;
        }
        
        try {
            let backImg = backImgRef.current;
            if (!backImg || backImg.src !== imgs[1]?.url) {
                backImgRef.current = await loadImg(imgs[1]?.url);
                backImg = backImgRef.current
            }
            let frontImg = frontImgRef.current;
            if (!frontImg || frontImg.src !== imgs[0]?.url) {
                frontImgRef.current = await loadImg(imgs[0]?.url);
                frontImg = frontImgRef.current
            }

            if (!frontImg || !backImg) {
                return;
            }

            const backImgSize = { width: backImg.width, height: backImg.height };
            const frontImgSize = { width: frontImg.width, height: frontImg.height };

            const backPosition = calcPosition(containerSize, backImgSize);
            const frontPosition = calcPosition(containerSize, frontImgSize);
            setImgSize([frontPosition, backPosition])
        } catch (error) {
            // 静默处理图片加载错误
            console.log("图片加载失败:", error);
        }
    }, [imgs, containerSize])

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const ob = new ResizeObserver(entries => {
            const [containerObj] = entries;
            //忽略置空的行为
            if (!containerObj.contentRect.width || !containerObj.contentRect.height) {
                return;
            }
            setContainerSize({
                width: containerObj.contentRect.width,
                height: containerObj.contentRect.height,
            })

        })
        // 监听尺寸变化
        ob.observe(containerRef.current);
        return () => {
            ob.disconnect();
        }
    }, [containerRef])

    return <div className={styles.backContainer} style={{
        backgroundImage: `url(${backInfo.url})`,
        backgroundSize: `${imgSize[1].width}px ${imgSize[1].height}px`,
        backgroundPosition: `${imgSize[1].left}px ${imgSize[1].top}px`
    }} ref={containerRef}>
        {backInfo.tag && <div className={styles.imgTag}>{backInfo.tag}</div>}
        <div style={{
            backgroundImage: `url(${frontInfo.url})`,
            backgroundSize: `${imgSize[0].width}px ${imgSize[0].height}px`,
            backgroundPosition: `${imgSize[0].left}px ${imgSize[0].top}px`
        }} className={styles.frontContainer}>
            {frontInfo.tag && <div className={styles.imgTag}>{frontInfo.tag}</div>}
        </div>
    </div>
}