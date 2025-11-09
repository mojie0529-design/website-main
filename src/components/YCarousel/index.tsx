import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Carousel, Image } from "@arco-design/web-react";
import { ImageItem } from "./interface";
import { ChangeImage } from "../ChangeImage";
interface IProps {
    imgItems: ImageItem[];
}
export const YCarousel: FC<IProps> = (props) => {
    const { imgItems } = props;
    const [idx, setIdx] = useState(0);

    const renderItem = (item: ImageItem, idx: number) => {
        if (item.type === "normal") {
            const { desc = "" } = item;
            const descContent = typeof desc === "string" ? desc : desc?.content;
            return <div className={styles.carouselItem}>
                <img 
                  src={item.src} 
                  onError={(e) => {
                    e.currentTarget.src = ""; // 加载失败时设为空
                  }}
                  alt="" 
                  className={styles.imgItem} 
                />
                {descContent && <div className={styles.imgDesc}>
                    {typeof desc !== "string" && desc.title && <div className={styles.descTitle}>{desc.title}</div>}
                    <div className={styles.descContent}>{descContent}</div>
                </div>}
            </div>
        } else if (item.type === "diff") {
            return <div className={styles.carouselItem}>
                {
                    item?.imgs?.map?.(((img, imgIdx) => {
                        return <div className={styles.diffImgItem}>
                            <img 
                              key={imgIdx} 
                              src={img.src} 
                              onError={(e) => {
                                e.currentTarget.src = ""; // 加载失败时设为空
                              }}
                              alt="" 
                              className={styles.imgItem} 
                            />
                            {img.tag && <div className={styles.imgTag}>{img.tag}</div>}
                        </div>
                    }))
                }
            </div>
        } else if (item.type === "change") {
            return <div className={styles.carouselItem}>
                <ChangeImage imgs={item.src}></ChangeImage>
            </div>
        }
    }

    useEffect(() => {
        if (!imgItems[idx]) {
            setIdx(0);
        }
    }, [idx, imgItems])

    return <div className={styles.container}>
        <Carousel
            currentIndex={idx}
            onChange={(index) => setIdx(index)}
            showArrow="hover"
            autoPlay
            moveSpeed={1000}
            arrowClassName={styles.arrowClassName}
            indicatorType="never"
            style={{ width: "100%", height: "100%" }}
        >
            {imgItems.map((item, index) => (
                <div>
                    {renderItem(item, index)}
                </div>
            ))}
        </Carousel>
    </div>
}