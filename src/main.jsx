import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/slices.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* redux stire provider which provides the reducers or state of particular slices from redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
