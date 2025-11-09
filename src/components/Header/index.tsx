import { FC, useEffect } from "react";
import "./index.scss";
import { YButton } from "../Button";
import { useHistory } from "react-router-dom";
interface IProps {
    showBtns?: boolean
    showContact?: boolean;
}

const activeBtns = [
    {
        id: "desc",
        label: "首页"
    },
    {
        id: "design",
        label: "设计大模型"
    },
    {
        id: "room",
        label: "家居大模型"
    },
    {
        id: "trade",
        label: "行业垂直模型"
    }
]
export const Header: FC<IProps> = (props) => {
    const { showBtns = true, showContact = true } = props;
    const history = useHistory()

    return <div className="header">
        <img className="logo" src="http://img1.comixai.online/website/logo.png?hash=1"></img>
        {showBtns && <div className="href-list">
            {activeBtns.map(it => {
                return <div key={it.id} className="href-item" onClick={() => {
                    const el = document.getElementById(it.id);
                    el?.scrollIntoView({ behavior: "smooth", inline: "start" })
                }}>{it.label}</div>
            })}
        </div>}
        {showContact && <YButton style={{ marginLeft: "auto" }} onClick={() => history.push("/contact")} className="contact-btn" text="联系我们"></YButton>}
    </div>

}