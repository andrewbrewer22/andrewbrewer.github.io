
import React from "react";
import ReactDOM from 'react-dom';
import LandingPage from "./pages/landingPage/landing-page.js";
import App from "./App";
import { BrowserRouter } from "react-router-dom";





class NavBar extends React.Component {
    render() {
        
        return (
            <LandingPage></LandingPage>
        );
    }
}

//ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render( <App />, document.getElementById("root"));