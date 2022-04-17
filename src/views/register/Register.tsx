import { Input, Row, Col, Button, message } from "antd";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../redux/action-creators";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./style.css";
import GoogleLogo from "../../components/GoogleLogo";
import axiosInstance from "../../util/axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { rootStateType } from "../../redux/reducers";

function Register(props: any) {
  const [userName, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [newUserId, setNewUserId] = useState<string | null>(null);

  const user = useSelector((state: rootStateType) => state.user);
  const dispatch = useDispatch();
  const { loginActionCreator } = bindActionCreators(actionCreators, dispatch);

  let navigate = useNavigate();

  useEffect(() => {
    if (user.isLogedIn) {
      navigate("/user-panel");
    }
  });

  useEffect(() => {
    if (newUserId && email && password) {
      const credentials = {
        email,
        password,
      };
      loginActionCreator(credentials);
      navigate("/welcome");
    }
  }, [newUserId]);

  const handleRegistration = () => {
    if (userName && email && password) {
      const newUser = {
        name: userName,
        email: email,
        password: password,
      };
      axiosInstance
        .post("/user/register", newUser)
        .then((res) => setNewUserId(res.data._id))
        .catch((error) => console.log(error.message));
    } else {
      message.error({
        content: "نام، ایمیل و کلمه عبور باید تکمیل شوند!",
        className: "top-message",
      });
    }
  };

  return (
    <>
      <Row className="user-form">
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 18, offset: 3 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 10, offset: 7 }}
          xl={{ span: 6, offset: 9 }}
          className="register-container"
        >
          <h1>عضویت در سایت</h1>
          <Input
            className="user-input"
            size="large"
            placeholder=" نام (به فارسی)"
            prefix={<UserOutlined />}
            onChange={(e) => setUserName(e.target.value)}
            value={userName || ""}
          />
          <Input
            className="user-input"
            size="large"
            placeholder=" ایمیل"
            prefix={<MailOutlined />}
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
          />
          <Input.Password
            className="user-input"
            prefix={<LockOutlined />}
            size="large"
            placeholder=" کلمه عبور دلخواه"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
          <Button
            type="primary"
            size="large"
            onClick={() => handleRegistration()}
          >
            عضویت در سایت
          </Button>
          <div className="google-login">
            <Button icon={<GoogleLogo />} size="large">
              ورود با گوگل
            </Button>
          </div>
          <div className="switch-page">
            عضو هستید؟ <a href="/login">ورود به سایت</a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Register;
