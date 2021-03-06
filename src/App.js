import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./pages/errorpage";
import ResumePage from "./pages/Resume-page";
import BMICalcPage from "./pages/bmi-page";
import APIDEMO from "./pages/api-page";
import PictureGalleryPage from "./pages/picturegallery-page";
import HomePage from "./pages/home-page";
/* import CosmicNumber from "./pages/cosmicNumber-page"; */



//game
import GamePage from "./game/gamePage";

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
          <Route path="picturegallery" element={<PictureGalleryPage />} />
          {/* <Route path="cosmicnumber" element={<CosmicNumber />} /> */}


          {/*Game page*/}
          <Route path="webgame" element={<GamePage />} />

          {/*Error page*/}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
