import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import LandingPage from "./pages/landingPage/landing-page";
import BMICalculator from "./pages/bmiPage/bmi-page";

/*
export default class App extends React.Component{
    render(){
        return(
            <div>Hello World</div>
        );
    }
}
*/

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