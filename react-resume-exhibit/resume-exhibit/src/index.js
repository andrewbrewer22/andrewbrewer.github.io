
import React from "react";
import ReactDOM from 'react-dom';
import LandingPage from "./pages/landingPage/landing-page.js";

class NavBar extends React.Component {
    render() {
        
        return (
            <LandingPage></LandingPage>
        );
    }
}

ReactDOM.render(<NavBar />, document.getElementById('root'))