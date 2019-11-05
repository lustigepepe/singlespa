import React from "react";

// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
import { registerApplication, start } from "single-spa";

registerApplication("react", () => import("./react/react-index.js"),  pathPrefix('/'));
registerApplication("angular", () => import("./angular/angular-index.js"), pathPrefix('/'));
start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  };
}
