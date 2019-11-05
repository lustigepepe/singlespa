import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./components/app";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

function domElementGetter () {
  let el = document.getElementById("react");
  if (!el) {
    el = document.createElement("div");
    el.id = "react";
    document.body.appendChild(el);
  }

  return el;
};