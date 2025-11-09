import { FC, useState } from "react";
import "./index.scss";
import { TabOption, Tabs } from "@/components/Tabs";
import { Grid, Layout } from "@arco-design/web-react";
import { YCarousel } from "@/components/YCarousel";
import { YButton } from "@/components/Button";
import { isMobile } from "@/constant/env";
interface IProps {
}

const tabs: TabOption[] = [
    {
        title: isMobile ? "旧房改造" : "旧房改造效果图生成",
        renderItem() {
            return <div className="room-tab-inner">
                <Grid.Row className="room-inner-row">
                    <Grid.Col className="room-inner-col">
                        <YCarousel imgItems={[
                            {
                                type: "change",
                                src: [
                                    {
                                        url: "/images/room/home-before1.jpg",
                                        tag: "原图"
                                    },
                                    {
                                        url: "/images/room/home-after1.jpg",
                                        tag: "日式简约风格改造效果"
                                    }
                                ]
                            },
                            {
                                type: "change",
                                src: [
                                    {
                                        url: "/images/room/home-before2.jpg",
                                        tag: "原图"
                                    },
                                    {
                                        url: "/images/room/home-after2.jpg",
                                        tag: "日式简约风格改造效果"
                                    }
                                ]
                            },
                            {
                                type: "diff",
                                imgs: [{
                                    src: "/images/room/home-before3.jpg",
                                    tag: "原图"
                                }, {
                                    src: "/images/room/home-after3.jpg",
                                    tag: "日式简约风格改造效果"
                                }]
                            },
                        ]}></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="room-inner-col" flex="auto">
                        <div className="inner-title">旧房改造效果图生成</div>
                        <div className="inner-desc">利用进化智能独家AI技术，只需上传旧房照片，一键生成生成改造后的高质量效果图，可视化地预览改造计划，节省时间和成本，让家居改造规划变得更加智能和高效。</div>
                        <div className="inner-btns">
                            <YButton color="#B4B7BF" text="获得内测资格"></YButton>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
    {
        title: isMobile ? "毛坯装修" : "毛坯装修效果图生成",
        renderItem() {
            return <div className="room-tab-inner">
                <Grid.Row className="room-inner-row">
                    <Grid.Col className="room-inner-col">
                        <YCarousel imgItems={[
                            {
                                type: "change",
                                src: [{
                                    url: "/images/room/blank-before1.jpg",
                                    tag: "客厅毛胚"
                                }, {
                                    url: "/images/room/blank-after1.jpg",
                                    tag: "客厅改造效果"
                                }]
                            },
                            {
                                type: "diff",
                                imgs: [{
                                    src: "/images/room/blank-before2.jpg",
                                    tag: "卧室毛胚"
                                }, {
                                    src: "/images/room/blank-after2.jpg",
                                    tag: "卧室改造效果"
                                }]
                            },
                            {
                                type: "diff",
                                imgs: [{
                                    src: "/images/room/blank-before3.jpg",
                                    tag: "客厅毛胚"
                                }, {
                                    src: "/images/room/blank-after3.jpg",
                                    tag: "客厅改造效果"
                                }]
                            },
                        ]}></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="room-inner-col" flex="auto">
                        <div className="inner-title">毛坯装修效果图生成</div>
                        <div className="inner-desc">利用进化智能独家AI技术，将装修概念转化为高质量效果图，无论是从简单的平面图还是草图出发，深入了解每个设计细节，确保最终装修效果与预期契合。</div>
                        <div className="inner-btns">
                            <YButton color="#B4B7BF" text="获得内测资格"></YButton>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
    {
        title: isMobile ? "自主训练" : "品牌专有风格自主训练",
        renderItem() {
            return <div className="room-tab-inner">
                <Grid.Row className="room-inner-row">
                    <Grid.Col className="room-inner-col">
                        <YCarousel imgItems={[
                            {
                                type: "diff",
                                imgs: [{
                                    src: "/images/room/train-before1.jpg",
                                    tag: "原图"
                                }, {
                                    src: "/images/room/train-after1.jpg",
                                    tag: "品牌产品"
                                }]
                            },
                        ]}></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="room-inner-col" flex="auto">
                        <div className="inner-title">品牌专有风格自主训练</div>
                        <div className="inner-desc">提供自主训练工具，通过定制AI模型，让品牌风格得以表现和延续。不仅能够学习训练品牌各类产品，还能够学习训练品牌自有风格，调用并生成于效果图中。</div>
                        <div className="inner-btns">
                            <YButton color="#B4B7BF" text="获得内测资格"></YButton>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
    {
        title: "局部替换",
        renderItem() {
            return <div className="room-tab-inner">
                <Grid.Row className="room-inner-row">
                    <Grid.Col className="room-inner-col show-img">
                        <YCarousel imgItems={[
                            {
                                type: "diff",
                                imgs: [{
                                    src: "/images/room/part-original1.jpg",
                                    tag: "原图"
                                }, {
                                    src: "/images/room/part-replaced1.jpg",
                                    tag: "地板替换"
                                }]
                            },
                        ]}></YCarousel>
                    </Grid.Col>
                    <Grid.Col className="room-inner-col" flex="auto">
                        <div className="inner-title">局部替换</div>
                        <div className="inner-desc">轻松将指定局部进行快速替换，实时预览改变后的效果。在不破坏实际结构的情况下，提供更多的选择，以满足个性化需求，为家居设计带来更多可能性。</div>
                        <div className="inner-btns">
                            <YButton color="#B4B7BF" text="获得内测资格"></YButton>
                        </div>
                    </Grid.Col>
                </Grid.Row>
            </div >
        }
    },
]

export const RoomModel: FC<IProps> = (props) => {
    const { } = props;
    const [current, setCurrent] = useState(0);
    return <div className="room-model-container">
        <Tabs current={current} onChange={(idx) => setCurrent(idx)} options={tabs}></Tabs>
    </div>
}