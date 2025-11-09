import { CSSProperties, FC, useState } from "react";
import "./page.scss";
import { Button, Form, Input, Layout, Message, Typography } from "@arco-design/web-react";
import { Header } from "@/components/Header";
import logoBlack from "@/assets/logo-black.png"
import { YButton } from "@/components/Button";
import { useHistory } from "react-router-dom";
import { submitContact } from "@/api";
interface IProps {

}
const FormItem = Form.Item;
export const ContactPage: FC<IProps> = (props) => {
    const { } = props;
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [form] = Form.useForm();

    return <Layout className="container">
        <div className="header contact-header">
            <img className="logo" onClick={() => history.replace("/")} src={logoBlack}></img>

            {/* <YButton color="#000" className="contact-btn" text="联系我们"></YButton> */}
        </div>
        <div className="contact-content media-container">
            <div className="contact-tip">
                <div className="title">
                    立即预约咨询
                </div>
                <div className="desc">进化智能顾问将会在1-7个工作日内与您联系</div>
            </div>

            <div className="submit-form">
                <Form
                    className="form-class"
                    form={form}
                    autoComplete='off'
                    layout="vertical"
                    onSubmit={async (data) => {
                        setLoading(true);
                        try {
                            await submitContact(data)
                            Message.success("提交成功");
                            form.resetFields();
                        } catch (err) {
                            Message.error("提交失败，请重试");
                        }
                        setLoading(false);
                    }}
                >

                    <FormItem label='姓名' field='name' rules={[{ required: true, }]}>
                        <Input placeholder='请输入您的姓名' />
                    </FormItem>
                    <FormItem label='联系手机号' field='phone' rules={[{ required: true, }]}>
                        <Input placeholder='请输入您的联系手机号' />
                    </FormItem>
                    <FormItem label='联系邮箱' field='email' rules={[{ required: true, }]}>
                        <Input placeholder='请输入您的联系邮箱' />
                    </FormItem>
                    <FormItem label='公司名称' field='company' rules={[{ required: true, }]}>
                        <Input placeholder='请填写完整的企业名称' />
                    </FormItem>
                    <FormItem label='公司所在地' field='address' rules={[{ required: true, }]}>
                        <Input placeholder='请输入公司所在地，例如杭州市萧山区' />
                    </FormItem>
                    <FormItem label='职务' field='job' rules={[{ required: true, }]}>
                        <Input placeholder='请输入您的职务' />
                    </FormItem>
                    <FormItem label='行业' field='trade' rules={[{ required: true, }]}>
                        <Input placeholder='请输入您所在的行业' />
                    </FormItem>
                    <FormItem label='主要使用场景' field='scene' rules={[{ required: true, }]}>
                        <Input.TextArea placeholder='请详细填写您的使用场景，完备的信息有助于我们更快联系您' />
                    </FormItem>


                    <FormItem>
                        <Button
                            className="submit-btn" loading={loading} type='primary' htmlType='submit'>
                            提交预约
                        </Button>
                    </FormItem>
                </Form>
            </div>

        </div>
    </Layout>

}