import React, { FC, useEffect, useRef, useState } from "react";
import "./page.scss";
import { Button, Layout } from "@arco-design/web-react";
import { ViewPart } from "@/components/ViewPart";
import { OpenPage } from "@/components/OpenPage";
import { Header } from "@/components/Header";
import { YButton } from "@/components/Button";
import partLogo1 from "@/assets/part-logo1.png";
import partLogo2 from "@/assets/part-logo2.png";
import partLogo3 from "@/assets/part-logo3.png";
import { DesignModel } from "./components/DesignModel";
import { RoomModel } from "./components/RoomModel";
import { TradeModel } from "./components/TradeModel";
import { FooterMain } from "./components/Footer";
import { ContactBtn } from "./components/ContactBtn";
import classNames from "classnames";

export interface IProps { }

const { Content, Footer } = Layout;

const Home: FC<IProps> = (props) => {
  const { } = props;
  const ref = useRef<HTMLElement>();
  const [showHeader, setShowHeader] = useState(true);
  const scrollValue = useRef(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      try {
        const scrollTop = ref.current?.scrollTop || 0;
        scrollValue.current = scrollTop;
        setShowHeader(scrollTop <= 100);
      } catch (error) {
        console.log("滚动处理错误:", error);
      }
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      
      return () => {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    }
  }, [ref]);

  

  return (
    <Layout ref={ref} className="container">
      <div className={classNames(open ? "visible" : "hidden")}>
        <Header showBtns={true} showContact={true}></Header>
        <Content className="content">
          <>
            <div 
              id="desc" 
              className="show-desc view-part"
              style={{
                backgroundImage: "url('/images/main-bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="desc-viewport media-container">
                <div className="title">
                  <div>DesignGPT</div>
                  <div>更懂设计的AI图像引擎</div>
                </div>
                <div className="tip">引领设计领域的AI图像大模型，重新定义设计的未来</div>
                <div className="btn-list">
                  <ContactBtn>合作咨询</ContactBtn>
                </div>
              </div>
            </div>
            <ViewPart backgroundColor="#fff" id="design" logoUrl={partLogo1} title="DesignGPT是专为设计领域而设计和训练的多模态大模型，具备理解和处理设计相关任务的能力">
              <DesignModel></DesignModel>
            </ViewPart>
            <ViewPart id="room" logoUrl={partLogo2} backgroundColor="#F5F6FE" title="家居大模型是进化智能专为家居行业打造的高度定制AI工具，探索家居设计的全新维度">
              <RoomModel></RoomModel>
            </ViewPart>
            <ViewPart id="trade" titleColor="#fff" logoUrl={partLogo3} backgroundColor="#181B20" title="为各行业打造定制化的行业垂直模型，提高效率，降低成本，增强创新能力">
              <TradeModel></TradeModel>
            </ViewPart>
            <section className="notice-part">
              <div className="text">加速设计向智能进化</div>
              <ContactBtn style={{ backgroundColor: "#3F58F6", borderRadius: 45 }}>合作咨询</ContactBtn>
            </section>
          </>
        </Content>
        <Footer>
          <FooterMain></FooterMain>
        </Footer>
      </div>
      <OpenPage visible={!open} onEnter={() => setOpen(true)} />
    </Layout>
  );
};

export default Home;