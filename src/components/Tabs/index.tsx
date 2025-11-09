import { FC, ReactNode } from "react";
import "./index.scss";
import classNames from "classnames";

export interface TabOption {
    title: string;
    color?: string;
    renderItem?: (idx: number) => ReactNode
}
interface IProps {
    options: TabOption[]
    current: number;
    onChange: (idx: number) => void;
}
export const Tabs: FC<IProps> = (props) => {
    const { options, current, onChange } = props;

    const currentRender = options[current]?.renderItem;
    return <div className="tabs">
        <ul className="tab-tags">
            {options.map((option, idx) => {
                return <li style={option.color ? { color: option.color } : {}} onClick={() => onChange(idx)} className={classNames("tab-tag", { active: idx === current })} key={option.title}>
                    {option.title}
                </li>
            })}
        </ul>
        <div className="tab-content">{currentRender?.(current)}</div>
    </div>

}