import { FC, useState } from "react";
import "./index.scss";
import { TabOption, Tabs } from "@/components/Tabs";
import { Grid, Layout } from "@arco-design/web-react";
import { YCarousel } from "@/components/YCarousel";
import { ContactBtn } from "../ContactBtn";
interface IProps {
}

const tabs: TabOption[] = [
    {
        title: "汽车行业",
        color: "#fff",
        renderItem() {
            return <div className="trade-tab-inner">
                <Grid.Row className="trade-inner-row">
                    <Grid.Col className="trade-inner-col">
                        <YCarousel imgItems={[
                            {
                                type: "normal",
                                src: "/images/trade/car-1.jpg",
                                desc: {
                                    title: "输入",
                                    content: "某品牌某型号汽车在夏季的森林小溪背景中"
                                }
                            },
                            {
                                type: "normal",
                                src: "/images/trade/car-2.jpg",
                                desc: {
                                    title: "输入",
                                    content: "某品牌某型号汽车在高楼林立的城市中"
                                }
                            },
                            {
                                type: "normal",
                                src: "/images/trade/car-3.jpg",
                                desc: {
                                    title: "输入",
                                    content: "某品牌某型号汽车在沙漠中"
                                }
                            },
                            {
                                type: "normal",
                                src: "/images/trade/car-4.jpg",
                                desc: {
                                    title: "输入",
                                    content: "某品牌某型号汽车在舞台灯光下"
                                }
                            },
                            {
                                type: "normal",
                                src: "/images/trade/car-5.jpg",
                                desc: {
                                    title: "输入",
                                    content: "某品牌某型号汽车在夏季的森林小溪背景中"
                                }
                            },
                        ]}></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="trade-inner-col" flex="auto">
                        <div className="inner-title">汽车行业</div>
                        <div className="inner-desc">进化智能为汽车品牌提供独特的宣传图生成解决方案，将创新与效率融合于一体。根据品牌特色和市场趋势自动生成图像，将文字和概念转化为引人入胜的宣传图，为汽车品牌呈现出无限可能，为汽车行业的宣传活动提供支持。</div>
                        <div className="inner-btns">
                            <ContactBtn>合作咨询</ContactBtn>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
    {
        title: "工业产品行业",
        color: "#fff",
        renderItem() {
            return <div className="trade-tab-inner">
                <Grid.Row className="trade-inner-row">
                    <Grid.Col className="trade-inner-col">
                        <YCarousel imgItems={
                            new Array(9).fill("1").map((_, index) => ({
                                type: "normal",
                                src: `/images/trade/product-${index + 1}.jpg`
                            }))
                        }></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="trade-inner-col" flex="auto">
                        <div className="inner-title">工业产品行业</div>
                        <div className="inner-desc">进化智能为辅助工业产品设计提供高效的解决方案，将创新引入工业领域，助力产品设计团队实现更快速、更智能的创意生成。无论是在原型设计、产品改进还是创新设计方面，进化智能都将为工业产品设计领域带来前所未有的便利和效率</div>
                        <div className="inner-btns">
                            <ContactBtn>合作咨询</ContactBtn>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
    {
        title: "消费产品行业",
        color: "#fff",
        renderItem() {
            return <div className="trade-tab-inner">
                <Grid.Row className="trade-inner-row">
                    <Grid.Col className="trade-inner-col">
                        <YCarousel imgItems={
                            new Array(4).fill("1").map((_, index) => ({
                                type: "normal",
                                src: `/images/trade/consumer-${index + 1}.jpg`
                            }))
                        }></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="trade-inner-col" flex="auto">
                        <div className="inner-title">消费产品行业</div>
                        <div className="inner-desc">进化智能为轻工生产行业带来了前所未有的机遇，帮助企业更好地应对市场挑战，提高竞争力，实现可持续增长。</div>
                        <div className="inner-btns">
                            <ContactBtn>合作咨询</ContactBtn>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
]

export const TradeModel: FC<IProps> = (props) => {
    const { } = props;
    const [current, setCurrent] = useState(0);
    return <div className="trade-model-container">
        <Tabs current={current} onChange={(idx) => setCurrent(idx)} options={tabs}></Tabs>
    </div>
}