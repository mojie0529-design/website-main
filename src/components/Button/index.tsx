import { CSSProperties, FC, ReactNode } from "react";
import "./index.scss";
export interface YButtonProps {
    text?: ReactNode;
    className?: string;
    onClick?: () => void
    color?: string;
    style?: CSSProperties,
}
export const YButton: FC<YButtonProps> = (props) => {
    const { text, style = {}, color = "#fff", className, onClick } = props;

    return <div onClick={onClick} style={{ ...style, color, borderColor: color }} className={`design-btn ${className || ""}`} > {text}</ div>

}