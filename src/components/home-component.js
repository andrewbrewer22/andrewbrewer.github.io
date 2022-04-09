import React from "react";
import "../styles/mainStyle.css";

export default class HomeComponent extends React.Component{
    render(){
        return(
            <section className="rightbreak">
                <div className="home-title">
                    This the home page.

                    Jordan is a loser.
                </div>
            </section>
        );
    }
}