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

/*Language Imports*/
import LangaugeMain from "./language/languageMain";
import EnglishMain from "./language/english/englishMain";
import EnglishGrammerMain from "./language/english/grammer/englishGrammerMain";

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
          <Route path="shop" element={<ShoppingPage />} />

          {/*Grammer*/}
          <Route path="language" element={<LangaugeMain />} />
          {/*English*/}
          <Route path="language/english" element={<EnglishMain />} />
          <Route path="language/english/grammer" element={<EnglishGrammerMain />} />
          <Route path="language/english/poetry" element={<LangaugeMain />} />

          {/*Error page*/}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
