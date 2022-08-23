import React from "react";
import HealthNavbar from "../components/healthNav";
import HealthComponent from "../components/healthComponent";
/* import "../styles/health.css"; */

export default class HealthPage extends React.Component{

    render(){
        document.body.style = 'background: rgba(180, 180, 180, 1);';
        return(
            <body className="body">
                <section className="break-container">
                    <HealthNavbar />

                    <HealthComponent />
                </section>
            </body>
        );
    }

}