import React, { useState } from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./pages/errorpage";
import ResumePage from "./pages/resume-page";
import BMICalcPage from "./pages/bmi-page";
import APIDEMO from "./pages/api-page";
import HomepricingPage from "./pages/homepricing-page";
import PictureGalleryPage from "./pages/picturegallery-page";
import HomePage from "./pages/home-page";
import CosmicNumber from "./pages/cosmicNumber-page";

//tools
import ScrollToTop from "./tools/ScrollToTop";

//https://andrewbrewer.github.io (this was originally in the homepage section in package.json)
function App() {
  return (
    <main>
      
      <Router >
        <ScrollToTop />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="bmicalc" element={<BMICalcPage />} />
          <Route path="api" element={<APIDEMO />} />
          <Route path="homeBuyer" element={<HomepricingPage />} />
          <Route path="picturegallery" element={<PictureGalleryPage />} />
          <Route path="cosmicnumber" element={<CosmicNumber />} />

          {/*Error page*/}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
