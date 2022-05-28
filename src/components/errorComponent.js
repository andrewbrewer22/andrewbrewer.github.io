import React from "react";
import "../styles/error.css";

export default class ErrorComponent extends React.Component{
    render(){
        return(
            <section className="rightbreak">
                <div className="error-body">
                ERROR: PAGE NOT FOUND
                </div>
            </section>
        );
    }
}