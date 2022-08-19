import React from "react";
import "../styles/error.css";

export default class UniversalErrorComponent extends React.Component{
    render(){
        return(
            <section className="rightbreak portfolio-color-1">
                <div className="error-body portfolio-color-2">
                ERROR: PAGE NOT FOUND
                </div>
            </section>
        );
    }
}