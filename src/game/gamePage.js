import React from "react";
import LeftNavbar from "../components/leftnavbar";
import Pong from "./pong";

import "../styles/mainStyle.css";

export default class GamePage extends React.Component{
    render(){
        document.body.style = "background: rgb(65, 65, 65);";
        return(
            <body className="body">

                <section className="break-container">

                    <LeftNavbar />

                    <Pong />

                </section>

            </body>
        );
    }
}