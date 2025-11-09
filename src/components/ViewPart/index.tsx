import { FC, ReactNode, useEffect, useRef } from "react";
import "./index.scss";
import { animated, useSpring } from '@react-spring/web'
import { useExpose } from "@/hooks/use-expose";
interface IProps {
    title: string;
    titleColor?: string;
    desc?: string;
    backgroundColor?: string;
    logoUrl?: string;
    children?: ReactNode;
    id?: string;
}
export const ViewPart: FC<IProps> = (props) => {
    const { logoUrl, id, title, titleColor, backgroundColor, children } = props
    const ref = useRef(null);
    const { expose } = useExpose(ref);
    const [springs1, api1] = useSpring(() => ({
        from: { opacity: 0 },
        config: {
            friction: 100
        },
    }))
    const [springs2, api2] = useSpring(() => ({
        from: { opacity: 0, y: 100 },
        config: {
            friction: 70
        },
    }))

    useEffect(() => {
        if (expose) {
            api1.start({
                delay: 300,
                to: { opacity: 1 },
            })
            api2.start({
                delay: 300,
                to: { opacity: 1, y: 0 },
            })
        }
    }, [expose])


    return <section ref={ref} id={id} className="view-part-container" style={{ backgroundColor }}>
        <div className="media-container model-container" >
            <animated.div
                className="model-header"
                style={{ ...springs1 }}
            >
                {logoUrl && <img className="model-type-desc" src={logoUrl}></img>}
                <div className="model-type-title" style={titleColor ? { color: titleColor } : {}}>{title}</div>
            </animated.div>
            <animated.div
                className="model-content"
                style={{ ...springs2 }}
            >
                {
                    children
                }
            </animated.div>
        </div>
    </section>
}