import React from "react";
import "../styles/mainStyle.css";
import ErrorLeftNavbar from "../components/errorNav";
//import ErrorComponent from "../components/errorComponent";
import UniversalErrorComponent from "../components/universalErrorComponent";

export default class ErrorPage extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(
            <body className="body">
                <section className="break-container">
                    
                <ErrorLeftNavbar />

                <UniversalErrorComponent />

                </section>
            </body>
        );
    }
}