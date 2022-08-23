import React from "react";
import LeftNavbar from "../components/leftnavbar";
import HealthComponent from "../components/healthComponent";

/* import "../styles/health.css"; */

export default class HealthPage extends React.Component{

    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(
            <body className="body">
                <section className="break-container">
                    <LeftNavbar />

                    <HealthComponent />
                </section>
            </body>
        );
    }

}