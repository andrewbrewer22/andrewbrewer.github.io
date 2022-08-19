import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./pages/errorpage";

/*--------------*/
/*RESUME PORTION*/
/*-V----------V-*/

/*Portfolio Imports*/
import ResumePage from "./pages/Resume-page";
import BMICalcPage from "./pages/bmi-page";
import APIDEMO from "./pages/api-page";
import PictureGalleryPage from "./pages/picturegallery-page";
import ResumeHomePage from "./pages/home-page";

/*Shopping Imports*/
import ShoppingPage from "./shop/shoppingPage";

/*Language Imports*/
import LangaugeMain from "./language/languageMain";
/*English*/
import EnglishMain from "./language/english/englishMain";
import EnglishGrammerMain from "./language/english/grammer/englishGrammerMain";
/*Japanese*/
import JapaneseMain from "./language/japanese/japaneseMain";

/*-^----------^-*/
/*RESUME PORTION*/
/*--------------*/

/*----------------*/
/*Personal PORTION*/
/*-V------------V-*/
import PersonalHomePage from "./.personal/pages/p-homepage";
/*-^------------^-*/
/*Personal PORTION*/
/*----------------*/

//tools
import ScrollToTop from "./tools/ScrollToTop";


//https://andrewbrewer.github.io (this was originally in the homepage section in package.json)
function App() {
  return (
    <main>

      <Router >
        <ScrollToTop />
        <Routes >
          {/*--------------*/
          /*RESUME PORTION*/
          /*-V----------V-*/}

          {/*Personal Portfolio*/}
          <Route path="/r-welcome" element={<ResumeHomePage />} />
          <Route path="portfolio/resume" element={<ResumePage />} />
          <Route path="portfolio/bmicalc" element={<BMICalcPage />} />
          <Route path="portfolio/api" element={<APIDEMO />} />
          <Route path="portfolio/picturegallery" element={<PictureGalleryPage />} />

          {/*Shopping*/}
          <Route path="shop" element={<ShoppingPage />} />

          {/*Language*/}
          <Route path="language" element={<LangaugeMain />} />
          {/*English*/}
          <Route path="language/english" element={<EnglishMain />} />
          <Route path="language/english/grammer" element={<EnglishGrammerMain />} />
          <Route path="language/english/poetry" element={<LangaugeMain />} />
          {/*Japanese*/}
          <Route path="language/japanese" element={<JapaneseMain />} />

          {/*----------------*/
          /*Personal PORTION*/
          /*-V------------V-*/}

          <Route path="/p-welcome" element={<PersonalHomePage />} />

          {/*Error page*/}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
