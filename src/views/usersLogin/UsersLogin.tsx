import { Input, Row, Col, Button } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import "./style.css";
import GoogleLogo from "../../components/GoogleLogo";

function UsersLogin() {
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
        />
        <Input.Password
          className="user-input"
          prefix={<LockOutlined />}
          size="large"
          placeholder=" کلمه عبور"
        />
        <div className="forget-password">
          <a href="#">کلمه عبور را فراموش کرده اید؟</a>
        </div>
        <Button type="primary" size="large" className="login-button">
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
