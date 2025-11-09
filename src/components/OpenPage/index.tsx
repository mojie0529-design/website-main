import { FC, useEffect, useState } from "react";
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
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

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
                    <Button 
                        className="enter-btn" 
                        onClick={() => onEnter?.()}
                        type="primary"
                        size="large"
                    >
                        点击进入<IconArrowRight style={{ marginLeft: 18 }} />
                    </Button>
                </div>
                <div className="overlay"></div>
            </div>
        </div>
    );
}