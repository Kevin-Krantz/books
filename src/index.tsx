import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configureStore";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";

// calling configureStore that it gives me my root reducer internally
const store = configureStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
