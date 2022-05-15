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
            </section>
        );
    }
}