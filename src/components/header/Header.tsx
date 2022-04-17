import "./Style.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../../redux/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/action-creators";
import { useNavigate } from "react-router-dom";

function Header() {
  const user = useSelector((state: rootStateType) => state.user);
  const dispatch = useDispatch();
  const { logoutActionCreator } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();

  const whMenu = (
    <Menu className="submenu" style={{ width: 250 }}>
      <Menu.Item key="1" style={{ fontSize: 15 }}>
        <a target="_blank" href="#">
          معرفی برنامه دنیای عادتها
        </a>
      </Menu.Item>
      <Menu.Item key="2" style={{ fontSize: 15 }}>
        <a target="_blank" href="#">
          خرید اشتراک
        </a>
      </Menu.Item>
      <Menu.Item key="3" style={{ fontSize: 15 }}>
        <a target="_blank" href="#">
          همه جلسات{" "}
        </a>
      </Menu.Item>
      <Menu.Item key="4" style={{ fontSize: 15 }}>
        <a target="_blank" href="#">
          دانلود صوت جلسات{" "}
        </a>
      </Menu.Item>
    </Menu>
  );
  const contactMenu = (
    <Menu className="submenu" style={{ width: 250 }}>
      <Menu.Item key="5" style={{ fontSize: 15 }}>
        <a target="_blank" href="#">
          تماس با ما
        </a>
      </Menu.Item>
      <Menu.Item key="6" style={{ fontSize: 15 }}>
        <a target="_blank" href="#">
          درخواست عودت وجه
        </a>
      </Menu.Item>
      <Menu.Item key="7" style={{ fontSize: 15 }}>
        <a target="_blank" href="#">
          درباره ما
        </a>
      </Menu.Item>
    </Menu>
  );
  const loginMenu = (
    <Menu className="submenu" style={{ width: 250 }}>
      <Menu.Item key="8" style={{ fontSize: 15 }}>
        <a href="/register">عضویت در سایت</a>
      </Menu.Item>
      <Menu.Item key="9" style={{ fontSize: 15 }}>
        <a href="/login">ورود به سایت</a>
      </Menu.Item>
    </Menu>
  );
  const userPanelMenu = (
    <Menu className="submenu" style={{ width: 250 }}>
      <p className="user-name">
        <UserOutlined style={{ marginLeft: 10 }} />
        {user.name}
      </p>
      <Menu.Item key="10" style={{ fontSize: 15 }}>
        <a href="/user-panel">پروفایل</a>
      </Menu.Item>
      <Menu.Item key="11" style={{ fontSize: 15 }}>
        <a onClick={() => logoutHandler()}>خروج از سایت</a>
      </Menu.Item>
    </Menu>
  );

  const logoutHandler = () => {
    localStorage.removeItem("bishekastAccessToken");
    logoutActionCreator();
  };
  return (
    <div className="header-container">
      <div className="menu-container">
        <p className="ant-dropdown-link" style={{ fontSize: 16 }}>
          <a href="/" style={{ fontSize: 16, color: "rgba(0,0,0,.85)" }}>
            صفحه اصلی
          </a>
        </p>
        <Dropdown overlay={whMenu}>
          <p className="ant-dropdown-link" style={{ fontSize: 16 }}>
            دنیای عادتها <DownOutlined style={{ color: "#8c8c8c" }} />
          </p>
        </Dropdown>
        <Dropdown overlay={contactMenu}>
          <p className="ant-dropdown-link" style={{ fontSize: 16 }}>
            تماس <DownOutlined style={{ color: "#8c8c8c" }} />
          </p>
        </Dropdown>
        {user.isLogedIn ? (
          <Dropdown overlay={userPanelMenu}>
            <p className="ant-dropdown-link" style={{ fontSize: 16 }}>
              پنل کاربری <DownOutlined style={{ color: "#8c8c8c" }} />
            </p>
          </Dropdown>
        ) : (
          <Dropdown overlay={loginMenu}>
            <p className="ant-dropdown-link" style={{ fontSize: 16 }}>
              ورود | عضویت <DownOutlined style={{ color: "#8c8c8c" }} />
            </p>
          </Dropdown>
        )}
      </div>
      <div className="logo-container">
        <img src="./retina-logo-3.png" width="100" alt="بی شکست"></img>
      </div>
      <div className="divider-line"></div>
    </div>
  );
}

export default Header;
