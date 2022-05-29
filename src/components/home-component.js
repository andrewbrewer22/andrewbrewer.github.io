import React from "react";

export default class HomeComponent extends React.Component{
    render(){
        return(
            <section className="rightbreak portfolio-color-2">
                <div className="home-title portfolio-color-3">
                    <p>Welcome To my website!</p>
                    <p>Click on the navbar to get started</p>
                </div>

                <div className="home-container portfolio-color-3">
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