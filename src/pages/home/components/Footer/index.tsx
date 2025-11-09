import styles from "./index.module.scss";
import { FC } from "react";
import ContactCode from "@/assets/contact-code.png";
import logo2 from "@/assets/logo2.png"
import { Divider, Grid } from "@arco-design/web-react";
import classNames from "classnames";
const { Row, Col } = Grid;
interface IProps {

}
export const FooterMain: FC<IProps> = (props) => {
    const { } = props;
    const renderInfoCol = (param: { title: string; descs: string[] }) => {
        return <div className={styles.footerCol}>
            <p className={styles.colTitle}>{param.title}</p>
            {param.descs.map((desc, idx) => {
                return <p key={desc + idx} className={styles.colDesc}>{desc}</p>
            })}
        </div>
    }

    return <div className={styles.container}>
        <div className={classNames("media-container", styles.content)} >
            <Row className={styles.footerRow}>
                <div className={styles.footerCol}>
                    <img width={156} className="logo" src={logo2}></img>
                </div>
                {/* {renderInfoCol({
                    title: "产品服务",
                    descs: ["DesignGPT", "RoomGPT"]
                })} */}
                {renderInfoCol({
                    title: "商务合作",
                    descs: ["邮箱：innoverse@126.com", "商务/销售微信：pamm0409", "生态合作微信：pamm0409"]
                })}
                {renderInfoCol({
                    title: "联系方式",
                    descs: ["商务合作：pandanying@designgpt.cloud", "公司地址：北京市海淀区中关村东升科技园b2座一层"]
                })}

                <div className={styles.contactCard}>
                    <div className="wechat-code">
                        <div>
                            <img width={85} src={ContactCode} />
                        </div>
                        <div className={styles.codeText}>
                            <span>扫码关注公众号</span>
                            <span>了解最新资讯</span>
                        </div>

                    </div>
                </div>

            </Row>
            <Divider></Divider>
            <Row className={styles.copyright}>
                <p>Copyright © 2022-现在 越天进化（北京）科技有限公司</p>
                <p>京ICP备1234567890号</p>
            </Row>
        </div>
    </ div>

}