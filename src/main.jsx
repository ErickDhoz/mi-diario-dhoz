import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { HashRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </HashRouter>
  </Provider>
);
