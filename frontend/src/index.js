// this file Connects your React app to the real browser index.html
import React from "react";
import ReactDOM from "react-dom/client";
//reactdom Used to render React components into the actual DOM (browser). 
import App from "./App.jsx";
//App is The root component of your app. Everything starts from here.
import "./index.css"; // Imports global styles (here, Tailwind CSS) to apply to your app.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// document.getElementById("root") → selects the div with id="root" in index.html.

// ReactDOM.createRoot(...) → creates a React root.

// A root is where React controls the DOM. Everything inside <App /> will be rendered here.
