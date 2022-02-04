import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./Store";
import "./index.css";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
