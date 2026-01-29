import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Count from "./Count";
import Login from "./Login";
import Loginform from "./Loginform";
import Usseeffect from "./Useeffect";
import  Useeffect  from "./Weather";
import Todo from "./To";
import "./index.css"; // 🔥 THIS LINE WAS MISSING

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
