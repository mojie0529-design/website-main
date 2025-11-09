import { FC, ReactNode } from "react";
import { YButton, YButtonProps } from "@/components/Button";
import { useHistory } from "react-router-dom";
interface IProps extends YButtonProps {
    children?: ReactNode;
}
export const ContactBtn: FC<IProps> = (props) => {
    const { children, ...others } = props;
    const history = useHistory();

    return <YButton {...others} onClick={() => history.push("/contact")} text={children}></YButton>
}