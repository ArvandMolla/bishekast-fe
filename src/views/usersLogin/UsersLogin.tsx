import { Input, Row, Col, Button, message } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import "./style.css";
import GoogleLogo from "../../components/GoogleLogo";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/action-creators";
import { Navigate, useNavigate } from "react-router-dom";
import { rootStateType } from "../../redux/reducers";

function UsersLogin() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const user = useSelector((state: rootStateType) => state.user);
  const dispatch = useDispatch();
  const { loginActionCreator } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLogedIn) {
      navigate("/user-panel");
    }
  });

  const handleLogin = async () => {
    if (email && password) {
      const credentials = {
        email,
        password,
      };

      loginActionCreator(credentials);
    } else {
      message.error({
        content: "ایمیل و کلمه عبور باید تکمیل شوند!",
        className: "top-message",
      });
    }
  };

  return (
    <Row className="user-form">
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 18, offset: 3 }}
        md={{ span: 12, offset: 6 }}
        lg={{ span: 10, offset: 7 }}
        xl={{ span: 6, offset: 9 }}
        className="register-container"
      >
        <h1>ورود به سایت</h1>

        <Input
          className="user-input"
          size="large"
          placeholder=" ایمیل"
          prefix={<MailOutlined />}
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input.Password
          className="user-input"
          prefix={<LockOutlined />}
          size="large"
          placeholder=" کلمه عبور"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="forget-password">
          <a href="#">کلمه عبور را فراموش کرده اید؟</a>
        </div>
        <Button
          type="primary"
          size="large"
          className="login-button"
          onClick={() => handleLogin()}
        >
          ورود به سایت
        </Button>
        <div className="google-login">
          <Button icon={<GoogleLogo />} size="large">
            ورود با گوگل
          </Button>
        </div>
        <div className="switch-page">
          عضو نیستید؟ <a href="/register">عضویت در سایت</a>
        </div>
      </Col>
    </Row>
  );
}

export default UsersLogin;
