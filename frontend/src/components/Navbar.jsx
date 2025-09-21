//component is small reusable building block of UI

import React from "react"; 
import { Link } from "react-router-dom";

//React is the library you’re using to build UI components.

// Link is a component provided by react-router-dom which lets you navigate between pages (routes) in your app without reloading the entire page.

// react-router-dom is a library for routing in React applications. It lets you navigate between different components/pages in a single-page application (SPA) without reloading the entire page

function Navbar() { //You are defining a functional component named Navbar.
//Components are small reusable building blocks of UI.

// JSX (JavaScript XML)
// Special syntax used in React to describe what the UI should look like.
// Looks like HTML but is not a string or HTML — it gets transformed into regular JavaScript by React.
//Makes it easier to write React components and UI in a declarative way

// JS = the language that does the logic.
// JSX = a syntax extension to write HTML-like UI in JS.

//jsx is returned in return part
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
        {/* Without flex, boxes would stack vertically. it changes the layout direction to horizontal (default) so children sit in a row.It also makes spacing and alignment much easier. */}
      <div className="font-bold text-xl">PrepVision</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
      </div>
    </nav>
  );
}

export default Navbar;


