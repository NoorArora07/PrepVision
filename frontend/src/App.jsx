// This file is the main application layout.Defines routes (/, /upload etc.).Loads the correct page depending on the route.
// It’s the glue that holds together pages and components.

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//BrowserRouter as Router-> Handles navigation inside your app without refreshing the page.It watches the URL (/, /upload, etc.) and decides which page to show.

// Routes = container for all your defined paths.

// Route = defines a single path (/, /upload) and what component should show there.

import Navbar from "./components/Navbar";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <Router>
      {/* <Router> ... </Router> Wraps the entire app.
Provides the "routing context" so Link and Route work correctly. */}
      <Navbar />
      <Routes>
        {/* routes Defines which page (component) to load based on the URL. */}

        <Route path="/" element={<div className="p-4">Welcome to PrepVision</div>} />
        {/* When the URL is http://localhost:3000/upload, render the UploadPage. */}
        <Route path="/upload" element={<UploadPage />} />


      </Routes>
    </Router>
  );
}

export default App;


// Router (BrowserRouter) = provides the routing system to the whole app.
// Routes & Route = define the pages (which component shows for which URL).
// Link = lets users click and move between those pages.