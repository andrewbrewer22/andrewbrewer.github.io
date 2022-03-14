
import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from "./landing-page";

class NavBar extends React.Component {
    render() {
        document.body.style = 'background: rgb(65, 65, 65);';
        return (
            <LandingPage></LandingPage>
        );
    }
}

ReactDOM.render(<NavBar />, document.getElementById('root'))