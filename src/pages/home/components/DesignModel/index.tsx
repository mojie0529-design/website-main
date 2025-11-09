import { FC, useEffect, useState } from "react";
import "./index.scss";
import { Divider, Grid } from "@arco-design/web-react";
import { TabOption, Tabs } from "@/components/Tabs";
import { YCarousel } from "@/components/YCarousel";
import { ContactBtn } from "../ContactBtn";
import { animated, useChain, useSpring, useSprings } from "@react-spring/web";
import { useAsyncEffect } from "ahooks";
import { delay } from "@/utils/common";
interface IProps {
}

const options = [
    {
        title: "文生设计图",
        subTitle: "输入文字，得到设计图。所思即所得，让创意即刻得以立体呈现，轻松将想法变成现实。为设计工作提供百倍效率提升与无限可能",
        bgIcon: ""
    },
    {
        title: "企业模型训练",
        subTitle: "通过深入了解企业的需求、行业特点和产品类型，为企业提供专属的、高效的智能设计解决方案",
        bgIcon: ""
    },
    {
        title: "专业级生成渲染",
        subTitle: "引领专业级生成渲染，智能局部替换或背景更改，实现棚拍级别的生成渲染效果",
        bgIcon: ""
    },
]
const tabs: TabOption[] = [
    {
        title: "文生设计图",
        renderItem() {
            return <div className="design-tab-inner">
                <Grid.Row className="design-inner-row">
                    <Grid.Col className="design-inner-col">
                        <YCarousel imgItems={
                            new Array(8).fill("1").map((_, idx) => ({
                                type: "normal",
                                src: `/images/design/design-txt2img-${idx + 1}.jpg`,
                            }))
                        }></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="design-inner-col" flex="auto">
                        <div className="inner-title">文生设计图</div>
                        <div className="inner-desc">输入文字，得到设计图。所思即所得，让创意即刻得以立体呈现，轻松将想法变成现实。为设计工作提供百倍效率提升与无限可能。</div>
                        <div className="inner-btns">
                            <ContactBtn style={{ backgroundColor: "#3F58F6" }}>合作咨询</ContactBtn>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
    {
        title: "企业模型训练",
        renderItem() {
            return <div className="design-tab-inner">
                <Grid.Row className="design-inner-row">
                    <Grid.Col className="design-inner-col">
                        <YCarousel imgItems={
                            new Array(5).fill("1").map((_, idx) => ({
                                type: "normal",
                                src: `/images/design/design-model-${idx + 1}.jpg`,
                            }))
                        }></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="design-inner-col" flex="auto">
                        <div className="inner-title">企业模型训练</div>
                        <div className="inner-desc">通过深入了解企业的需求、行业特点和产品类型，为企业提供专属的、高效的智能设计解决方案。我们了解不同行业对设计的独特性，因此提供了行业模型训练服务，以确保您的模型更符合真实需求。此外，行业数据库实时更新，能够随时获得最新的市场趋势和创新设计灵感。</div>
                        <div className="inner-btns">
                            <ContactBtn style={{ backgroundColor: "#3F58F6" }}>合作咨询</ContactBtn>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
    {
        title: "专业级生成渲染",
        renderItem(idx) {
            return <div className="design-tab-inner">
                <Grid.Row className="design-inner-row">
                    <Grid.Col className="design-inner-col">
                        <YCarousel imgItems={
                            new Array(5).fill("1").map((_, idx) => ({
                                type: "normal",
                                src: `/images/design/design-render-${idx + 1}.jpg`,
                            }))
                        }></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="design-inner-col" flex="auto">
                        <div className="inner-title">专业级生成渲染</div>
                        <div className="inner-desc">上传产品、输入文字即可实现一键渲染，专业级的AI生成渲染，智能局部替换或背景更改，超真实光影效果、具备专家审美，实现棚拍级别的生成渲染效果</div>
                        <div className="inner-btns">
                            <ContactBtn style={{ backgroundColor: "#3F58F6" }}>合作咨询</ContactBtn>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
]
export const DesignModel: FC<IProps> = (props) => {
    const { } = props;
    const [tabIndex, setTabIndex] = useState(0);
    const [springs, api] = useSpring(() => ({
        from: { y: 600, opacity: 0 },
        config: {
            friction: 50
        },
    }))
    const [elmentsProps, eApi] = useSprings(3, () => {
        return {
            from: {
                x: 0,
                opacity: 1,
            },
            config: {
                friction: 70
            },
        }

    })

    useAsyncEffect(async () => {
        if (tabIndex > -1) {
            await eApi.start(idx => {
                const xList = [[0, 1000, 1000], [-1000, 0, 1000], [-1000, -1000, 0]]
                return {
                    to: {
                        x: idx === tabIndex ? 0 : xList[tabIndex][idx],
                        opacity: 0
                    }
                }
            })
            await delay(500);
            await api.start({
                to: {
                    y: 0,
                    opacity: 1
                }
            })
        }

    }, [tabIndex])

    return <div className="design-model-container">
        <div className="init-container inner-container">
            {options.map((item, index) => {
                return <animated.div style={elmentsProps[index]} key={item.title} className="txt2img card" onClick={() => setTabIndex(index)}>
                    <div className="title">{item.title}</div>
                    <div className="sub-title">{item.subTitle}</div>
                    <Divider style={{ backgroundColor: "#fff" }}></Divider>
                </animated.div>
            })}
        </div>
        <animated.div className="content-container inner-container" style={{ ...springs }}>
            <Tabs current={tabIndex} onChange={(idx) => setTabIndex(idx)} options={tabs}></Tabs>
        </animated.div>
    </div>
}