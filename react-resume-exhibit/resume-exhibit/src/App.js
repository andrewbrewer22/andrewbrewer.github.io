
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";




//#region 

/*
export default class App extends React.Component{
    render(){
        return(
            <div>Hello World</div>
        );
    }
}
*/

/*

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="bmiCalc" element={<BMICalculator />} />
                <Route path="landingPage" element={<LandingPage />} />
                <Route path="users/*" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}

function Users() {
    return(
        <div>
            <nav>
                <link to="me">My Profile</link>
            </nav>

            <Routes>
                <Route path="me" element={<div>ME</div>} />
                <Route path="landingPage" element={<LandingPage />} />
                <Route path="bmiCalc" element={<BMICalculator />} />
            </Routes>
        </div>
    );
}
*/

/*
export default function App() {
    return (
      <div>
        <h1>Basic Example</h1>
        <Routes>
            <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} />

            <Route path="resume" element={<Resume />} />
            <Route path="bmiCalc" element={<BMICalculator />} />

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    );
  }
  
  function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="resume">Resume</Link>
            </li>
            <li>
              <Link to="bmiCalc">BMICalculator</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
    );
  }
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  
  function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
*/
//#endregion


import Home from "./testing/Home";
import About from "./testing/About";
import Profile from "./testing/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;