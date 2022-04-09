import React from "react";
import "../styles/mainStyle.css";
import LeftNavbar from "../components/leftnavbar";

export default class ErrorPage extends React.Component{
    render(){
        return(
            <body className="body">
                <section className="break-container">
                    
                <LeftNavbar />

                <div>ERROR: PAGE NOT FOUND</div>

                </section>
            </body>
        );
    }
}