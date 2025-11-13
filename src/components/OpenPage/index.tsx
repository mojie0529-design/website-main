import { FC, useState, useEffect } from "react";
import "./index.scss";
import { IconArrowRight } from "@arco-design/web-react/icon"
import { Header } from "../Header";
import classNames from "classnames";
import { Button } from "@arco-design/web-react";

interface IProps {
    onEnter?: () => void;
    visible?: boolean;
}

export const OpenPage: FC<IProps> = (props) => {
    const { onEnter, visible } = props;
    const [loading, setLoading] = useState(false);
    const [resourcesLoaded, setResourcesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    // 智能预加载关键资源
    useEffect(() => {
        const preloadResources = async () => {
            const resources = [
                '/images/main-bg.jpg',                    // 主页背景
                '/images/design/design-txt2img-1.jpg',    // 设计模块首图
                '/images/room/home-before1.jpg',          // 家居模块首图
                '/images/trade/car-1.jpg',                // 行业模块首图
            ];

            let loadedCount = 0;

            try {
                await Promise.all(
                    resources.map(resource => {
                        return new Promise((resolve) => {
                            const img = new Image();
                            img.src = resource;
                            img.onload = () => {
                                loadedCount++;
                                setLoadProgress(Math.round((loadedCount / resources.length) * 100));
                                resolve(true);
                            };
                            img.onerror = () => {
                                loadedCount++;
                                setLoadProgress(Math.round((loadedCount / resources.length) * 100));
                                resolve(true); 
                            };
                        });
                    })
                );
                setResourcesLoaded(true);
                setLoadProgress(100);
            } catch (error) {
                setResourcesLoaded(true); /
            }
        };

        preloadResources();
    }, []);

    const handleEnter = () => {
        setLoading(true);
        const delay = resourcesLoaded ? 300 : 1500;
        setTimeout(() => {
            onEnter?.();
        }, delay);
    }

    return (
        <div className={classNames("open-page-container", visible ? "visible" : "hidden")}>
            <Header showContact={false} showBtns={false}></Header>
            <div 
                className="open-page-background"
                style={{
                    background: "url('/images/main-bg.jpg') center/cover no-repeat",
                    backgroundSize: 'cover'
                }}
            >
                <div className="open-page-content">
                    <div className="title">DesignGPT</div>
                    <div className="subtitle">更懂设计的AI图像引擎</div>
                    
                    {/* 加载进度显示 */}
                    {!resourcesLoaded && (
                        <div className="load-progress">
                            <div className="progress-text">加载资源中... {loadProgress}%</div>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill" 
                                    style={{ width: `${loadProgress}%` }}
                                ></div>
                            </div>
                        </div>
                    )}
                    
                    <Button 
                        loading={loading && !resourcesLoaded}
                        className="enter-btn" 
                        onClick={handleEnter}
                        type="primary"
                        size="large"
                    >
                        {loading ? (
                            resourcesLoaded ? "即将进入..." : `加载中 ${loadProgress}%`
                        ) : (
                            <>点击进入<IconArrowRight style={{ marginLeft: 18 }} /></>
                        )}
                    </Button>
                </div>
                <div className="overlay"></div>
            </div>
        </div>
    );
}