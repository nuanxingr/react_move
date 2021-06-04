import { useEffect } from "react";
import {
    Modal,
    NavBar,
    Icon,
    WingBlank,
    WhiteSpace,
    InputItem,
    Button,
} from "antd-mobile"
import { RouteComponentProps } from "react-router-dom";

const { alert } = Modal;
export default function PhoneRegister(props: RouteComponentProps) {
    //     useEffect是用来使用生命周期函数的
    //   当第二个参数传入空数组，就相当于componentDidMount
    useEffect(() => {
        alert(
            "注册协议及隐私政策",
            <span className="phone-register-policy">
                在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
        <strong className="phone-register-text">
                    请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）
        </strong>
        :<span className="phone-register-agreement">《硅谷用户注册协议》</span>
                <span className="phone-register-agreement">《硅谷隐私政策》</span>
            </span>,
            [
                {
                    text: "不同意",
                    onPress: () => {
                        // 返回到上一个页面
                        props.history.push("/phoneLogin");
                    },
                },
                {
                    text: "同意",
                    // onPress: () => console.log("ok"),
                    style: {
                        backgroundColor: "red",
                        color: "#fff",
                    },
                },
            ]
        );
    }, []);


    return (

        <div className="container">

            <NavBar
                mode="light"
                icon={<Icon className="left-icon" type="left" />}
                onLeftClick={() => props.history.push("/phoneLogin")}>
                硅谷注册
          </NavBar>
            {/* 两翼留白 */}
            <WingBlank size="lg">
                <WhiteSpace size="xl" />
                <InputItem placeholder="请输入手机号" clear>
                    <div className="phone-prefix">
                        <span>+86</span>
                        <Icon className="left-icon" type="down" />
                    </div>
                </InputItem>
                <WhiteSpace size="xl" />
                <div className="phone-btn-container">
                    <Button type="primary" className="btn">
                        下一步
              </Button>
                </div>
            </WingBlank>
        </div>
    );
}