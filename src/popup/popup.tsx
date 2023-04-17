import React from "react";
import ReactDOM from "react-dom/client";
import "./popup.scss";

const App = () => {
  return (
    <>
      <img src="icon256.png" alt=""/>
    </>
  );
};

const container = document.createElement("div");
container.id = "root";
document.body.appendChild(container);
ReactDOM.createRoot(container as HTMLElement).render(
  <App />,
);
