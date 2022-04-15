import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ConfigProvider } from "antd";

ConfigProvider.config({
  theme: {
    primaryColor: "#0565a6",
    errorColor: "#ff4d4f",
    warningColor: "#faad14",
    successColor: "#52c41a",
    infoColor: "#1890ff",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider direction="rtl">
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
