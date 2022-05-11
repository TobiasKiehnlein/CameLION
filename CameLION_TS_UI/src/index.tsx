import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { initWasm } from "./utils/wasm";

initWasm().then(
  () =>
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    ),
  (error) => {
    console.error("Error initializing wasm: " + error);
    document
      .getElementById("root")
      ?.append("Error initializing wasm: " + error + "\nStack: " + error.stack);
  }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
