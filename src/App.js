import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./pages/errorpage";
/*Portfolio Imports*/
import ResumePage from "./pages/Resume-page";
import BMICalcPage from "./pages/bmi-page";
import APIDEMO from "./pages/api-page";
import PictureGalleryPage from "./pages/picturegallery-page";
import HomePage from "./pages/home-page";
/* import CosmicNumber from "./pages/cosmicNumber-page"; */

/*Shopping Imports*/
import ShoppingPage from "./shop/shoppingPage";

//tools
import ScrollToTop from "./tools/ScrollToTop";


//https://andrewbrewer.github.io (this was originally in the homepage section in package.json)
function App() {
  return (
    <main>
      
      <Router >
        <ScrollToTop />
        <Routes >
          {/*Personal Portfolio*/}
          <Route path="/" element={<HomePage />} />
          <Route path="portfolio/resume" element={<ResumePage />} />
          <Route path="portfolio/bmicalc" element={<BMICalcPage />} />
          <Route path="portfolio/api" element={<APIDEMO />} />
          <Route path="portfolio/picturegallery" element={<PictureGalleryPage />} />

          {/*Shopping*/}
          <Route path="shop/" element={<ShoppingPage />} />

          {/*Error page*/}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
