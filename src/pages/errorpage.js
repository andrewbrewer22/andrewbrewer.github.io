import React from "react";
import "../styles/mainStyle.css";
import LeftNavbar from "../components/leftnavbar";
import ErrorComponent from "../components/errorComponent";

export default class ErrorPage extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(
            <body className="body">
                <section className="break-container">
                    
                <LeftNavbar />

                <ErrorComponent />

                </section>
            </body>
        );
    }
}