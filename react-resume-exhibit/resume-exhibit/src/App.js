import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ErrorPage from "./testing/ErrorPage";
import ResumePage from "./pages/Resume-page";
import BMICalcPage from "./pages/bmi-page";

//#region testing code
/*
function App() {
  return (
    <Router>
      Simple nav bar for testing (Will always be displayed on any page
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      These are the elements that change
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile/:username" element={<Profile />}/>

        *Error page*
        <Route path="*" element={<ErrorPage/>} />
      </Routes>

      Continue HTML, whatever is outside Routes will always be displayed
      <footer>FOOTTEERR</footer>

    </Router>
  );
}

export default App;
*/
//#endregion

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumePage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="bmicalc" element={<BMICalcPage />} />

        {/*Error page*/}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;