import React from "react";
import HomepricingComponent from "../components/homepricing-component";
import LeftNavbar from "../components/leftnavbar";
import "../styles/mainStyle.css";

export default class HomepricingPage extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(
            <body className="body">
                <section className="break-container">
                    
                <LeftNavbar />

                <HomepricingComponent />

                </section>
            </body>
        );
    }
}