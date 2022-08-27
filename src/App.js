import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import ErrorPage from "./pages/errorpage";
import DefaultDirectory from "./pages/default-dir";
import RegistrationPage from "./register/register-home";
import LoginPage from "./register/login";

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

/*Health Imports*/
import HealthPage from "./health/pages/health-page";
import "./health/style/health.css";

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

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAd8YozoHMjON66XfiQdtGAQP5ixiceUiA",
    authDomain: "andrewbrewergithubio.firebaseapp.com",
    projectId: "andrewbrewergithubio",
    storageBucket: "andrewbrewergithubio.appspot.com",
    messagingSenderId: "351499485802",
    appId: "1:351499485802:web:4d29f1dd477a8cf1dc4013",
    measurementId: "G-VNNW48LMRG"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  return (
    <main>

      <Router >
        <ScrollToTop />
        <Routes >

          <Route path="/" element={<DefaultDirectory />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/*--------------*/
          /*RESUME PORTION*/
          /*-V----------V-*/}

          {/*Personal Portfolio*/}
          <Route path="/r-welcome" element={<ResumeHomePage />} />
          <Route path="portfolio/resume" element={<ResumePage />} />
          <Route path="portfolio/bmicalc" element={<BMICalcPage />} />
          <Route path="portfolio/api" element={<APIDEMO />} />
          <Route path="portfolio/picturegallery" element={<PictureGalleryPage />} />

          {/*Health*/}
          <Route path="health" element={<HealthPage />} />

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
        </Routes>
      </Router>
    </main>
  );
}

export default App;
