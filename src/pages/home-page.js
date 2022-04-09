import React from "react";
import HomeComponent from "../components/home-component";
import LeftNavbar from "../components/leftnavbar";
import "../styles/mainStyle.css";

export default class HomePage extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(

            <body className="body">
                <section className="break-container">
                    
                <LeftNavbar />

                <HomeComponent />

                </section>
            </body>

            
        );
    }
}