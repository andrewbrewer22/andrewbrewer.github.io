import React from "react";
import "../styles/mainStyle.css";

export default class HomeComponent extends React.Component{
    render(){
        return(
            <section className="rightbreak">
                <div className="home-title">
                    <p>Welcome To my website!</p>
                    <p>Click on the navbar to get started</p>
                </div>

                <div className="home-container">
                    <p>This Website is built in <span id="bold-this">ReactJS</span> to demonstrate my current skills!</p>
                    <p id="bold-this">Things to expect</p>
                    <p className="divider-line "></p>

                    <ul className="home-points">
                        <li>Resume</li>
                        <li>BMI Calculator</li>
                        <li>API demonstration</li>
                        {/* <li>Picture Gallery</li> */}
                    </ul>
                </div>
            </section>
        );
    }
}